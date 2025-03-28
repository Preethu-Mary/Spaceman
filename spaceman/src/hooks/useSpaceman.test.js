import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import useSpaceman from "./useSpaceman";

describe("useSpaceman Hook", () => {
  it("initializes correctly", () => {
    const { result } = renderHook(() => useSpaceman());
    expect(result.current.word).toBeTypeOf("string");
    expect(result.current.attempts).toBe(7);
    expect(result.current.strokeColors).toEqual(Array(7).fill("#D3D3D3"));
    expect(result.current.gameOver).toBe(false);
  });

  it("handles correct letter guess", () => {
    const { result } = renderHook(() => useSpaceman());

    act(() => {
      result.current.handleGuessLetter("A");
    });

    if (result.current.word.includes("A")) {
      expect(result.current.guessedWord).toContain("A");
    } else {
      expect(result.current.attempts).toBe(6);
    }
  });

  it("handles wrong letter guess", () => {
    const { result } = renderHook(() => useSpaceman());

    act(() => {
      result.current.handleGuessLetter("Z");
    });

    expect(result.current.attempts).toBe(6);
    expect(result.current.strokeColors[0]).toBe("red");
  });

  it("handles word guess", () => {
    const { result } = renderHook(() => useSpaceman());

    act(() => {
      result.current.handleGuessWord(result.current.word);
    });

    expect(result.current.guessedWord.join("")).toBe(result.current.word);
  });
});
