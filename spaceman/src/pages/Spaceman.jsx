import Animation from "../components/Animation";
import Keyboard from "../components/Keyboard";
import WordTextBox from "../components/WordTextBox";
import useSpaceman from "../hooks/useSpaceman";
import { ToastContainer } from "react-toastify";
import "../styles/spaceman.css";

const Spaceman = () => {
    const { word, strokeColors, guessedWord, usedLetters, attempts, handleGuessLetter, handleGuessWord, gameOver } = useSpaceman();

    return (
        <div className="spaceman">
            <div className="spaceman__upper">
                <div className="spaceman__word">
                    <h1 className="spaceman__word__title animate__animated animate__pulse">Guess the word,<br /> Rescue the SpaceMan!</h1>
                    <h1 className="spaceman__word__container">{guessedWord.join(" ")}</h1>
                </div>
                <Animation strokeColors={strokeColors} className1={attempts === 0 ? "animate__animated animate__fadeOutUp" : ""} className2={guessedWord.join("") === word && attempts > 0 ? "animate__animated animate__hinge" : ""} />
            </div>
            {gameOver ? (
                <h5 className="spaceman__message">Better luck next time!</h5>
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
