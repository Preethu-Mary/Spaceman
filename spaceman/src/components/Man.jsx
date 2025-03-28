import "../styles/Man.css"
import alien from "../assets/alien-trans.png"


const Man = ({ strokeColors, className1, className2 }) => {
    return (
        < div className="man" >
            <img src={alien} alt="Alien" className={`alien ${className2}`} />
            <svg width="100" height="150" className={className1}>
                {/* Head */}
                <circle cx="50" cy="20" r="15" stroke={strokeColors[0]} strokeWidth="5" fill="none" />

                {/* Eyes */}
                <circle cx="45" cy="17" r="2" fill={"white"} />
                <circle cx="55" cy="17" r="2" fill={"white"} />

                {/* Neutral Mouth */}
                <line x1="45" y1="25" x2="55" y2="25" stroke={"white"} strokeWidth="2" />

                {/* Upper Body */}
                <line x1="50" y1="35" x2="50" y2="60" stroke={strokeColors[1]} strokeWidth="5" />

                {/* Arms */}
                <line x1="30" y1="55" x2="50" y2="50" stroke={strokeColors[2]} strokeWidth="5" />
                <line x1="70" y1="55" x2="50" y2="50" stroke={strokeColors[3]} strokeWidth="5" />

                {/* Lower Body */}
                <line x1="50" y1="60" x2="50" y2="90" stroke={strokeColors[4]} strokeWidth="5" />

                {/* Legs */}
                <line x1="50" y1="90" x2="30" y2="120" stroke={strokeColors[5]} strokeWidth="5" />
                <line x1="50" y1="90" x2="70" y2="120" stroke={strokeColors[6]} strokeWidth="5" />
            </svg>

        </div >
    )
}

export default Man