export default function GameOver({winner, restart}) {
    return <div id="game-over">
            <h2>Game Over</h2>
            {winner && <p> Winner {winner}</p> }
            {!winner && <p>Its Draw </p> }
            <p>
                <button onClick={restart}>Play Again</button>
            </p>
        </div>
}