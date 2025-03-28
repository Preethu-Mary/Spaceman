import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { words } from "../data/words";

// Custom hook to manage the spaceman game state
const useSpaceman = () => {
  const [word, setWord] = useState("");
  const [attempts, setAttempts] = useState(7);
  const [usedLetters, setUsedLetters] = useState(new Set());
  const [guessedWord, setguessedWord] = useState(Array(7).fill(" "));
  const [wrongGuessCount, setWrongGuessCount] = useState(0);
  const [strokeColors, setstrokeColors] = useState(Array(7).fill("black"));
  const [gameOver, setGameOver] = useState(false);
  const wordSet = new Set(word);

  // This function resets the game by selecting a new random word and resetting the states
  const reset = () => {
    const selectedWord =
      words[Math.floor(Math.random() * words.length)].toUpperCase();
    setWord(selectedWord);
    setguessedWord(new Array(selectedWord.length).fill("_"));
    setstrokeColors(Array(7).fill("#181a18"));
    setUsedLetters(new Set());
    setAttempts(7);
    setWrongGuessCount(0);
    setGameOver(false);
  };

  //This function handles the wrong guesses made by the user
  const handleWrongGuess = () => {
    // Update the stroke color (e.g., for the spaceman) based on the wrong guess count
    setstrokeColors((prevstrokeColors) => {
      const newstrokeColors = [...prevstrokeColors];
      newstrokeColors[wrongGuessCount] = "white"; // Change color to white for each wrong guess
      return newstrokeColors; // Decrease the number of attempts
    });

    setWrongGuessCount((prev) => prev + 1); // Increment the wrong guess count
    setAttempts((prev) => prev - 1);
  };

  //This function handles a letter guess made by the user
  const handleGuessLetter = (letter) => {
    // Ignore the letter if it has already been guessed
    if (usedLetters.has(letter)) return;

    // Mark the letter as used
    setUsedLetters((prevUsed) => new Set(prevUsed).add(letter));

    // Check if the guessed letter is in the word
    if (wordSet.has(letter)) {
      // Update the guessed word with the correct letter
      setguessedWord((prevguessedWord) =>
        prevguessedWord.map((char, i) => (word[i] === letter ? letter : char))
      );
    } else {
      // If the guess is wrong, handle the incorrect guess
      handleWrongGuess();
    }
  };

  //This function handles a full word guess made by the user
  const handleGuessWord = (input) => {
    if (input === word) {
      // If the word guessed is correct, set the guessed word to the correct word
      setguessedWord(input.split(""));
    } else {
      // If the word is incorrect, handle the wrong guess
      handleWrongGuess();
    }
  };

  // This effect runs when the guessed word matches the target word and displays success message
  useEffect(() => {
    if (guessedWord.join("") === word && attempts > 0) {
      toast.success("Congratulations, You Won!", {
        onClose: () => {
          reset();
        },
        autoClose: 3000,
      });
    }
  }, [guessedWord, word]);

  // This effect runs when attempts reach 0 and displays a game over message
  useEffect(() => {
    if (attempts === 0) {
      setguessedWord(word.split(""));
      toast.error("Game Over!", {
        onClose: () => {
          reset();
        },
        autoClose: 3000,
      });
      setGameOver(true);
    }
  }, [attempts]);

  // Initial game reset when the component is mounted
  useEffect(reset, []);

  return {
    word, // The word to be guessed
    strokeColors, // The colors of the stroke for spaceman drawing
    guessedWord, // The current guessed word
    usedLetters, // Set of used letters
    attempts, // The remaining number of attempts
    handleGuessLetter, // Function to handle letter guesses
    handleGuessWord, // Function to handle full word guesses
    gameOver, // Flag indicating whether the game is over
  };
};

export default useSpaceman;
