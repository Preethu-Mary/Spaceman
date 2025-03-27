import "../styles/Man.css"


const Man = ({ colors }) => {
    return (
        < div className="man" >
            <svg width="100" height="150">
                {/* Head */}
                <circle cx="50" cy="20" r="15" stroke={colors[0]} strokeWidth="5" fill="none" />

                {/* Upper Body */}
                <line x1="50" y1="35" x2="50" y2="60" stroke={colors[1]} strokeWidth="5" />

                {/* Arms */}
                <line x1="30" y1="55" x2="50" y2="50" stroke={colors[2]} strokeWidth="5" />
                <line x1="70" y1="55" x2="50" y2="50" stroke={colors[3]} strokeWidth="5" />


                {/* Lower Body */}
                <line x1="50" y1="60" x2="50" y2="90" stroke={colors[4]} strokeWidth="5" />


                {/* Legs */}
                <line x1="50" y1="90" x2="30" y2="120" stroke={colors[5]} strokeWidth="5" />
                <line x1="50" y1="90" x2="70" y2="120" stroke={colors[6]} strokeWidth="5" />
            </svg>
        </div >
    )
}

export default Man