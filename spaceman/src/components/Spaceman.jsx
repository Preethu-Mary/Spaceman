import Man from "../components/Man";
import Keyboard from "./Keyboard";
import WordTextBox from "./WordTextBox";
import useSpaceman from "../useSpaceman";
import { ToastContainer } from "react-toastify";
import "../styles/spaceman.css";

const Spaceman = () => {
    const { word, colors, guessed, usedLetters, handleGuessLetter, handleGuessWord, gameOver } = useSpaceman();

    return (
        <div className="spaceman">
            <Man colors={colors} />
            <h1 className="word_container">{guessed.join(" ")}</h1>
            {gameOver ? (
                <h5 className="game-over-message">Game Over!  The answer was {word}. Refresh to play again.</h5>
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
