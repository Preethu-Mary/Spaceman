import "../styles/Keyboard.css"

const Keyboard = ({ onGuessLetter }) => {
    const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    return (
        <div className="keyboard">
            {
                alphabets.map((l, index) =>
                    <button className="btn btn-outline-danger button" key={index} onClick={() => onGuessLetter(l)}>
                        {l}
                    </button>
                )
            }
        </div>
    )
}

export default Keyboard