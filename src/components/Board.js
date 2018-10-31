import React from 'react';
import Cell from './Cell'

const Board = ({boardCells}) => {

    const renderBoard = []
    for(let i = 0; i < 7; i++){
        while (boardCells[i].length < 6) {
            boardCells[i].push("blank")
        }
    }
    for(let j = 5; j >=0; j--) {
        for(let i = 0; i < 7; i++){
            renderBoard.push(<Cell className={boardCells[i][j]} />)
        }
    }

    return(
        <div className="board">
            {renderBoard}
        </div>
    );

}

export default Board;