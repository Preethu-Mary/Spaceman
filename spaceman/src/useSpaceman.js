import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const words = ["Apple", "Mango", "Orange"];

const useSpaceman = () => {
  const [colors, setColors] = useState(Array(7).fill("#D3D3D3"));
  const [word, setWord] = useState("");
  const [attempts, setAttempts] = useState(7);
  const [usedLetters, setUsedLetters] = useState(new Set());
  const [guessed, setGuessed] = useState(Array(7).fill(" "));
  const [wrongGuessCount, setWrongGuessCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const wordSet = new Set(word);

  const randomWord = () => {
    const selectedWord =
      words[Math.floor(Math.random() * words.length)].toUpperCase();
    setWord(selectedWord);
    setGuessed(new Array(selectedWord.length).fill("_"));
    setColors(Array(7).fill("#D3D3D3"));
    setUsedLetters(new Set());
    setAttempts(7);
    setWrongGuessCount(0);
    setGameOver(false);
  };

  const handleGuessLetter = (letter) => {
    if (usedLetters.has(letter)) return; // Prevent duplicate clicks

    setUsedLetters((prevUsed) => new Set(prevUsed).add(letter));

    if (wordSet.has(letter)) {
      setGuessed((prevGuessed) =>
        prevGuessed.map((char, i) => (word[i] === letter ? letter : char))
      );
    } else {
      setColors((prevColors) => {
        const newColors = [...prevColors];
        newColors[wrongGuessCount] = "black";
        return newColors;
      });

      setWrongGuessCount((prev) => prev + 1);
      setAttempts((prev) => prev - 1);
    }
  };

  const handleGuessWord = (input) => {
    if (input === word) {
      setGuessed(input.split(""));
    } else {
      setColors((prevColors) => {
        const newColors = [...prevColors];
        newColors[wrongGuessCount] = "black";
        return newColors;
      });

      setWrongGuessCount((prev) => prev + 1);
      setAttempts((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (guessed.join("") === word) {
      toast.success("Congratulations, You Won!", {
        onClose: () => {
          randomWord(); // Call function after toast disappears
        },
        autoClose: 3000,
      });
    }
  }, [guessed, word]);

  useEffect(() => {
    if (attempts === 0) {
      toast.success("Better luck next time!", {
        onClose: () => {
          randomWord();
        },
        autoClose: 3000,
      });
      setGameOver(true);
    }
  }, [attempts]);

  useEffect(randomWord, []);

  return {
    word,
    colors,
    guessed,
    usedLetters,
    attempts,
    handleGuessLetter,
    handleGuessWord,
    gameOver,
  };
};

export default useSpaceman;
