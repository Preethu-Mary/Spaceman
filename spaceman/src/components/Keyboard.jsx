import "../styles/Keyboard.css"

// Keyboard component for displaying the alphabet and handling letter guesses
const Keyboard = ({ onGuessLetter, usedLetters }) => {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

    return (
        <div className="keyboard">
            {/* Map through each letter of the alphabet and create a button for it */}
            {
                alphabets.map((l, index) =>
                    <button className="btn btn-danger button" key={index} onClick={() => onGuessLetter(l)} disabled={usedLetters.has(l)}>
                        {l}
                    </button>
                )
            }
        </div>
    )
}

export default Keyboard