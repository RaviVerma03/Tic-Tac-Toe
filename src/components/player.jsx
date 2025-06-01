import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing((editing) => !editing);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleOnChange(event) {
        setPlayerName(event.target.value);
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            setIsEditing(false);
            onChangeName(symbol, playerName);
        }
    }

    let editablePlayerName = (
        <span
            className="player-name"
            onClick={() => setIsEditing(true)}
        >
            {playerName}
        </span>
    );

    if (isEditing) {
        editablePlayerName = (
            <input
                type="text"
                value={playerName}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
                autoFocus
            />
        );
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol"> {symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    );
}
