import { useState } from "react";
import "../styles/WordTextBox.css";

const WordTextBox = ({ onGuessWord }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value.toUpperCase()); // Convert to uppercase for consistency
    };

    const handleSubmit = () => {
        if (inputValue.trim() !== "") {
            onGuessWord(inputValue); // Call the provided function with the guessed word
            setInputValue(""); // Clear input after submission
        }
    };

    return (
        <div className="word_text_box">
            <p>Guess the whole word : </p>
            <div className="input-group mb-3">
                <input type="text" className="form-control text-box" placeholder="Type word" value={inputValue} onChange={handleInputChange} onKeyDown={(e) => e.key === "Enter" && handleSubmit()} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={handleSubmit}>Go!</button>
                </div>
            </div>
        </div>
    );
};

export default WordTextBox;
