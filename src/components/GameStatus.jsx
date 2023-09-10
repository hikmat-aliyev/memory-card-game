import '../styles/GameStatus.css'

// eslint-disable-next-line react/prop-types
export default function GameStatus({setGameStarted, setGameStatus, win}) {

    function startAgain() {
        setGameStarted(false);
        setGameStatus(false);
    }

    return(
        <div className='game-status-modal'>
            <div className="page-darkness"></div>
             <div className="game-over-container">
                <h1>{win ? 'YOU WON!' : 'YOU LOST :('}</h1>
                <button onClick={startAgain}>Start again</button>
             </div>
        </div>
    )
}