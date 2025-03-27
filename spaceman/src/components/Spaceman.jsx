import { useState, useEffect } from "react";
import Man from '../components/Man'
import "../styles/spaceman.css"
import Keyboard from "./Keyboard";


const Spaceman = () => {

    const words = ["Apple", "Mango", "Orange"];

    const [colors, setColors] = useState(Array(7).fill("#D3D3D3"));
    const [word, setWord] = useState("");
    const [attempts, setAttempts] = useState(7);
    const [usedLetters, setUsedLetters] = useState(new Set());
    const [guessed, setGuessed] = useState([])
    const [wrongGuessCount, setWrongGuessCount] = useState(0);

    const wordSet = new Set(word)

    const randomWord = () => {
        const word = words[Math.floor(Math.random() * words.length)].toUpperCase();
        setWord(word);
        setGuessed(new Array(word.length).fill("_"));
        setColors(Array(7).fill("#D3D3D3"));
    }

    const reset = () => {
        randomWord()
    }

    const handleGuessLetter = (letter) => {
        if (usedLetters.has(letter)) return; // Prevent duplicate clicks

        setUsedLetters((prevUsed) => new Set(prevUsed).add(letter));
        if (wordSet.has(letter)) {
            let newGuessed = [...guessed];

            for (let i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    newGuessed[i] = letter;
                }
            }
            setGuessed(newGuessed);
        } else {
            setColors((prevColors) => {
                const newColors = [...prevColors];
                newColors[wrongGuessCount] = "black";
                return newColors;
            });

            setWrongGuessCount((prev) => prev + 1);
        }
        setAttempts((prev) => (prev) - 1)
    };

    useEffect(() => {
        if (guessed.join("") === word) {
            console.log("You Won!")
        }
    }, [guessed])

    useEffect(() => {
        if (attempts === 0) {
            console.log("You lose!")
        }
    }, [attempts])

    useEffect(reset, [])

    return (
        <div>
            <Man colors={colors} />
            <h1 className="word_container">{guessed.join(" ")}</h1>
            <Keyboard onGuessLetter={handleGuessLetter} usedLetters={usedLetters} />
        </div>

    )
}

export default Spaceman;