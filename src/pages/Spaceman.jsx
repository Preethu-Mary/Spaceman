import Animation from "../components/Animation";
import Keyboard from "../components/Keyboard";
import WordTextBox from "../components/WordTextBox";
import useSpaceman from "../hooks/useSpaceman";
import { ToastContainer } from "react-toastify";
import "../styles/spaceman.css";

const Spaceman = () => {
    // Destructure necessary values and functions from the custom hook useSpaceman
    const { word, strokeColors, guessedWord, usedLetters, attempts, handleGuessLetter, handleGuessWord, gameOver } = useSpaceman();

    return (
        <div className="spaceman">
            <div className="spaceman__upper">
                <div className="spaceman__word">
                    <h1 className="spaceman__word__title animate__animated animate__pulse">Guess the word,<br /> Rescue the SpaceMan!</h1>
                    {/* Display the current guessed word with blanks for unguessed letters */}
                    <h1 className="spaceman__word__container">{guessedWord.join(" ")}</h1>
                </div>
                {/* Animation component showing the spaceman's state and flying saucer's state*/}
                <Animation strokeColors={strokeColors} spaceman={attempts === 0 ? "animate__animated animate__fadeOutUp" : ""} saucer={guessedWord.join("") === word && attempts > 0 ? "animate__animated animate__hinge" : ""} />
            </div>
            {gameOver ? (
                <h5 className="spaceman__message">The answer was "{word}". <br /> Better luck next time!</h5>
            ) : (
                <>
                    {/* Keyboard component for letter guesses */}
                    <Keyboard onGuessLetter={handleGuessLetter} usedLetters={usedLetters} />
                    {/* WordTextBox component for full word guesses */}
                    <WordTextBox onGuessWord={handleGuessWord} />
                </>
            )
            }
            {/* ToastContainer to show toast notifications (e.g., success or error messages) */}
            <ToastContainer />
        </div >
    );
};

export default Spaceman;
