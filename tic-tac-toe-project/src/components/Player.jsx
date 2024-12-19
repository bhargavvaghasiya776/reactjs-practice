import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, SetPlayerName] = useState(initialName); 
    const [isEditing, SetIsEditing] = useState(false);    

    function handleEdit() {
        SetIsEditing((editing) => !editing);

        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        SetPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let btnText= 'Edit';

    if(isEditing){
        editablePlayerName = <input type="text" className="player-name" value={playerName} onChange={handleChange}/>;
        btnText = 'Save';
    }

    return (

        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{btnText}</button>
          </li>

    );

}