import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import useSpaceman from "./useSpaceman";

describe("useSpaceman Hook", () => {
  // Test case to verify the initial state of the hook
  it("initializes correctly", () => {
    const { result } = renderHook(() => useSpaceman());
    expect(result.current.word).toBeTypeOf("string");
    expect(result.current.word.length).toBeGreaterThan(0);
    expect(result.current.attempts).toBe(7);
    expect(result.current.guessedWord).toEqual(
      Array(result.current.word.length).fill("_")
    );
    expect(result.current.strokeColors).toEqual(Array(7).fill("#D3D3D3"));
    expect(result.current.usedLetters).toEqual(new Set());
    expect(result.current.wrongGuessCount).toBe(0);
    expect(result.current.gameOver).toBe(false);
  });

  // Test case to verify handling of correct and incorrect letter guesses
  it("handles a letter guess correctly and incorrectly", () => {
    const { result } = renderHook(() => useSpaceman());

    // Act: Simulate guessing the letter "A"
    act(() => {
      result.current.handleGuessLetter("A");
    });

    // If the word includes "A", check if it's added to guessedWord and usedLetters
    if (result.current.word.includes("A")) {
      expect(result.current.guessedWord).toContain("A");
      expect(result.current.usedLetters).toContain("A");
    } else {
      // If the letter is incorrect, check that attempts decrease and wrongGuessCount increases
      expect(result.current.attempts).toBe(6);
      expect(result.current.wrongGuessCount).toBe(1);
      // Check that stroke color for the first attempt turns white on a wrong guess
      expect(result.current.strokeColors[0]).toBe("white");
    }
  });

  // Test case to verify handling of full word guesses (correct and incorrect)
  it("handles a full word guess correctly and incorrectly", () => {
    const { result } = renderHook(() => useSpaceman());

    act(() => {
      result.current.reset(); // Ensure initial state
      result.current.setWord("HELLO"); // Set the word to be guessed
    });

    // Simulate guessing the correct word
    act(() => {
      result.current.handleGuessWord("HELLO"); // Correct guess
    });

    expect(result.current.guessedWord.join("")).toBe("HELLO");
    expect(result.current.gameOver).toBe(false);

    // Simulate an incorrect guess
    act(() => {
      result.current.handleGuessWord("WORLD"); // Incorrect guess
    });

    // Check that the number of attempts is decremented and wrong guesses are tracked
    expect(result.current.attempts).toBe(6);
    expect(result.current.wrongGuessCount).toBe(1);
    // Check that the stroke color changes for a wrong guess
    expect(result.current.strokeColors[0]).toBe("white");
  });
});
