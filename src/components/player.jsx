import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(initialName)
    function handlEditClick() {
        setIsEditing((editing) => !editing)

        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }
    function handleOnChange(event) {
        setPlayerName(event.target.value)
        event.preventDefault()
    }
    let editablePlayerName = <span className="player-name" >{playerName}</span>
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleOnChange} />
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol"> {symbol}</span>
            </span>
            <button onClick={handlEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}