import { useState, useEffect } from "react";
import "../styles/spaceman.css"
import Keyboard from "./Keyboard";


const Spaceman = () => {

    const words = ["Apple", "Mango", "Orange"];
    const [word, setWord] = useState("");
    const [attempts, setAttempts] = useState(7);
    const [guessed, setGuessed] = useState([])
    const wordSet = new Set(word)
    let wrongGuessCount = 0

    const randomWord = () => {
        const word = words[Math.floor(Math.random() * words.length)].toUpperCase();
        setWord(word);
        setGuessed(new Array(word.length).fill("_"));
    }

    const reset = () => {
        randomWord()
    }

    const handleGuessLetter = (letter) => {
        if (wordSet.has(letter)) {
            let newGuessed = [...guessed];

            for (let i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    newGuessed[i] = letter;
                }
            }
            setGuessed(newGuessed);
        } else {
            wrongGuessCount = wrongGuessCount + 1
        }
        console.log("Letter clicked: ", letter);
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
            <h1 className="word_container">{guessed.join(" ")}</h1>
            <Keyboard onGuessLetter={handleGuessLetter} />
        </div>

    )
}

export default Spaceman;