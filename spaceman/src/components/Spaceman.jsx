import { useState, useEffect } from "react";

const Spaceman = () => {

    const words = ["Apple", "Mango", "Orange"];
    const [word, setWord] = useState("");

    const randomWord = () => {
        setWord(words[Math.floor(Math.random() * words.length)].toLowerCase());
    }

    const reset = () => {
        randomWord()
    }

    useEffect(reset, [])

    return (
        <h1>{"_ ".repeat(word.length)}</h1>
    )
}

export default Spaceman;