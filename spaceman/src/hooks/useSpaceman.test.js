import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import useSpaceman from "./useSpaceman";

describe("useSpaceman Hook", () => {
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

  it("handles a letter guess correctly and incorrectly", () => {
    const { result } = renderHook(() => useSpaceman());

    act(() => {
      result.current.handleGuessLetter("A");
    });

    if (result.current.word.includes("A")) {
      expect(result.current.guessedWord).toContain("A");
      expect(result.current.usedLetters).toContain("A");
    } else {
      expect(result.current.attempts).toBe(6);
      expect(result.current.wrongGuessCount).toBe(1);
      expect(result.current.strokeColors[0]).toBe("white");
    }
  });

  it("handles a full word guess correctly and incorrectly", () => {
    const { result } = renderHook(() => useSpaceman());

    act(() => {
      result.current.reset(); // Ensure initial state
      result.current.setWord("HELLO"); // Set the correct word
    });

    act(() => {
      result.current.handleGuessWord("HELLO"); // Correct guess
    });

    expect(result.current.guessedWord.join("")).toBe("HELLO");
    expect(result.current.gameOver).toBe(false); // Game continues if not handled in your function

    act(() => {
      // Simulate an incorrect guess
      result.current.handleGuessWord("WORLD"); // Incorrect guess
    });

    expect(result.current.attempts).toBe(6);
    expect(result.current.wrongGuessCount).toBe(1);
    expect(result.current.strokeColors[0]).toBe("white");
  });
});
