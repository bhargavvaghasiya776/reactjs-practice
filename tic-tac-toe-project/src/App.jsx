import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getActivePlayer(gameTurns){
  let currentPlayer= 'X';
  if(gameTurns.length>0 && gameTurns[0].player === 'X'){
    currentPlayer='O';
  }

  return currentPlayer;
}

function App() {
  const [playerNames, SetPlayerNames] = useState({
    X : 'Player 1',
    O : 'Player 2'
  });
  const [gameTurns, SetGameTurns] = useState([]);
  // const [activePlayer, SetActivePlayer] = useState('X');    

  const activePlayer= getActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])];

  for(const turn of gameTurns){
      const {square, player} = turn;
      const {row,cell} = square;

      gameBoard[row][cell] = player;
  }

  let winner = null;

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column];

    if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
      winner = playerNames[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, cellIndex) {
    // SetActivePlayer((prevPlayer) => prevPlayer === 'X' ? 'O' : 'X');
    SetGameTurns((prevTurns)=>{

      
      let currentPlayer= getActivePlayer(prevTurns);
      if(prevTurns.length>0 && prevTurns[0].player === 'X'){
        currentPlayer='O';
      }

      const updatedTurns = [{square : {row: rowIndex, cell: cellIndex}, player: currentPlayer}, ...prevTurns];

      return updatedTurns;
    });
  }

  function handleRematch(){
    SetGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName){
    SetPlayerNames((prevNames) => {
      const updatedNames = {...prevNames};
      updatedNames[symbol] = newName;
      return updatedNames;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer==='X'} onChangeName={handlePlayerNameChange}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer==='O'} onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} restart={handleRematch}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
