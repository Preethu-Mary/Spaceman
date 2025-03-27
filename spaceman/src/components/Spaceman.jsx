import Man from "../components/Man";
import Keyboard from "./Keyboard";
import WordTextBox from "./WordTextBox";
import useSpaceman from "../useSpaceman";
import { ToastContainer } from "react-toastify";
import "../styles/spaceman.css";

const Spaceman = () => {
    const { word, strokeColors, guessedWord, usedLetters, handleGuessLetter, handleGuessWord, gameOver } = useSpaceman();

    return (
        <div className="spaceman">
            <Man strokeColors={strokeColors} />
            <h1 className="word_container">{guessedWord.join(" ")}</h1>
            {gameOver ? (
                <h5 className="game-over-message">Game Over!  The answer was {word}.</h5>
            ) : (
                <>
                    <Keyboard onGuessLetter={handleGuessLetter} usedLetters={usedLetters} />
                    <WordTextBox onGuessWord={handleGuessWord} />
                </>
            )}
            <ToastContainer />
        </div>
    );
};

export default Spaceman;
