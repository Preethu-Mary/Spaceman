import Man from "../components/Man";
import Keyboard from "./Keyboard";
import WordTextBox from "./WordTextBox";
import useSpaceman from "../useSpaceman";
import { ToastContainer } from "react-toastify";
import "../styles/spaceman.css";

const Spaceman = () => {
    const { word, strokeColors, guessedWord, usedLetters, attempts, handleGuessLetter, handleGuessWord, gameOver } = useSpaceman();

    return (
        <div className="spaceman">
            <div className="manAndWord">

                <div className="titleAndWord">
                    <h1 className="title animate__animated animate__pulse">Guess the word,<br /> Rescue the SpaceMan!</h1>
                    <h1 className="word_container">{guessedWord.join(" ")}</h1>
                </div>
                <Man strokeColors={strokeColors} className1={attempts === 0 ? "animate__animated animate__fadeOutUp" : ""} className2={guessedWord.join("") === word ? "animate__animated animate__hinge" : ""} />
            </div>
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
