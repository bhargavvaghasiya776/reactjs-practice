import { useState } from "react";



export default function GameBoard({onSelectSquare, board}) {


    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, cellIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][cellIndex] = activePlayerSymbol;

    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return <ol id="game-board">
        {board.map((row, rowIndex) => {
            return <li key={rowIndex}>
                <ol>
                {row.map((playerSymbol, cellIndex) => {
                    return <li key={cellIndex}><button onClick={() => onSelectSquare(rowIndex, cellIndex)} disabled= {playerSymbol!==null ? true : false }>{playerSymbol}</button></li>
                })}
                </ol>
            </li>
        })}
    </ol>
}