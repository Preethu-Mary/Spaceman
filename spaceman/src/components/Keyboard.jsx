import "../styles/Keyboard.css"

const Keyboard = ({ onGuessLetter, usedLetters }) => {
    const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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