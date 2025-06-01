export default function GameOver({ winner, onReStart }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>It's a draw!</p>}
            <p>
                <button onClick={onReStart}>Rematch!</button>
            </p>
        </div>
    )
}