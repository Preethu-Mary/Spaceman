import { useState } from "react";
import "../styles/WordTextBox.css";

// WordTextBox component for handling the input and submission of the guessed word
const WordTextBox = ({ onGuessWord }) => {
    const [inputValue, setInputValue] = useState("");

    // Function to handle input field changes
    const handleInputChange = (e) => {
        setInputValue(e.target.value.toUpperCase()); // Convert to uppercase for consistency
    };

    // Function to handle the form submission (when the user presses Enter or clicks 'Go!')
    const handleSubmit = () => {
        if (inputValue.trim() !== "") {
            onGuessWord(inputValue); // Call the provided function with the guessed word
            setInputValue(""); // Clear input after submission
        }
    };

    return (
        <div className="word">
            <p>Guess the whole word : </p>
            <div className="input-group mb-3">
                <input type="text" className="form-control word__text-box" placeholder="Type word" value={inputValue} onChange={handleInputChange} onKeyDown={(e) => e.key === "Enter" && handleSubmit()} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={handleSubmit}>Go!</button>
                </div>
            </div>
        </div>
    );
};

export default WordTextBox;
