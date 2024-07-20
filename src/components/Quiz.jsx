import React from 'react'
import Question from './Question'

export default function Quiz({togglePage}) {
    /*================  State and Hooks ==============*/
    const [game, setGame] = React.useState(false)

   
    /*================  Side Effects ==============*/
    /*----------------   --------------*/
    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=20&category=18&difficulty=medium&type=multiple")
        .then(res => res.json())
        .then(data => data.results)
    })
    /*----------------   --------------*/

    /*================  Helper Functions  ==============*/
    /*----------------   --------------*/
    function playAgain() {
        setGame(prevGame => !prevGame)
    }
    /*================  Event Handlers and Logic ==============*/

    /*================  Return JSX  ==============*/
    return (
        <div>
            <button className="quiz--back-btn" onClick={togglePage}>Back</button>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>

            {/* 
            Check Answers 
            - will render the answers display and score display
            "Play Again" 
            - will render the a new Quiz */}
            <button className="gameplay--btn"onClick={playAgain}>
                {
                game ? "Check Answers" : "Play Again"
                }
            </button>
            
            
            {/* <p>Which operating system was released first?</p>
            <button>Mac OS</button>
            <button>Windows</button>
            <button>Linux</button>
            <button>OS/2</button>
            <p>Which one of these is not an official development name for a Ubuntu release?</p>
            <button>Mystic Mansion</button>
            <button>Trusty Tahr</button>
            <button>Utopic Unicorn</button>
            <button>Wily Werewolf</button>
            <p>What was the name given to Android 4.3?</p>
            <button>Jelly Bean</button>
            <button>Lollipop</button>
            <button>Nutella</button>
            <button>Froyo</button>
            <p>In CSS, which of these values CANNOT be used with the &quot;position&quot; property?</p>
            <button>center</button>
            <button>static</button>
            <button>absolute</button>
            <button>relative</button> */}
        </div>
    )
}
