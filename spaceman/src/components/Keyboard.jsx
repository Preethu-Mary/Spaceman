import "../styles/Keyboard.css"

const Keyboard = ({ onGuessLetter, usedLetters }) => {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

    return (
        <div className="keyboard">
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