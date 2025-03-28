import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const words = ["Apple", "Mango", "Orange"];

const useSpaceman = () => {
  const [word, setWord] = useState("");
  const [attempts, setAttempts] = useState(7);
  const [usedLetters, setUsedLetters] = useState(new Set());
  const [guessedWord, setguessedWord] = useState(Array(7).fill(" "));
  const [wrongGuessCount, setWrongGuessCount] = useState(0);
  const [strokeColors, setstrokeColors] = useState(Array(7).fill("#D3D3D3"));
  const [gameOver, setGameOver] = useState(false);
  const wordSet = new Set(word);

  const reset = () => {
    const selectedWord =
      words[Math.floor(Math.random() * words.length)].toUpperCase();
    setWord(selectedWord);
    setguessedWord(new Array(selectedWord.length).fill("_"));
    setstrokeColors(Array(7).fill("#D3D3D3"));
    setUsedLetters(new Set());
    setAttempts(7);
    setWrongGuessCount(0);
    setGameOver(false);
  };

  const handleWrongGuess = () => {
    setstrokeColors((prevstrokeColors) => {
      const newstrokeColors = [...prevstrokeColors];
      newstrokeColors[wrongGuessCount] = "black";
      return newstrokeColors;
    });

    setWrongGuessCount((prev) => prev + 1);
    setAttempts((prev) => prev - 1);
  };

  const handleGuessLetter = (letter) => {
    if (usedLetters.has(letter)) return; // Prevent duplicate clicks

    setUsedLetters((prevUsed) => new Set(prevUsed).add(letter));

    if (wordSet.has(letter)) {
      setguessedWord((prevguessedWord) =>
        prevguessedWord.map((char, i) => (word[i] === letter ? letter : char))
      );
    } else {
      handleWrongGuess();
    }
  };

  const handleGuessWord = (input) => {
    if (input === word) {
      setguessedWord(input.split(""));
    } else {
      handleWrongGuess();
    }
  };

  useEffect(() => {
    if (guessedWord.join("") === word) {
      toast.success("Congratulations, You Won!", {
        onClose: () => {
          reset(); // Call function after toast disappears
        },
        autoClose: 3000,
      });
    }
  }, [guessedWord, word]);

  useEffect(() => {
    if (attempts === 0) {
      toast.error("Better luck next time!", {
        onClose: () => {
          reset();
        },
        autoClose: 3000,
      });
      setGameOver(true);
    }
  }, [attempts]);

  useEffect(reset, []);

  return {
    word,
    strokeColors,
    guessedWord,
    usedLetters,
    attempts,
    handleGuessLetter,
    handleGuessWord,
    gameOver,
  };
};

export default useSpaceman;
