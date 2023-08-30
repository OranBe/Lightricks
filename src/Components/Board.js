import React from 'react';
import Cell from './Cell';
import Message from './Message';


function Board({ IsXturn, cells, updateStep }) {
    return (
      <>
        <Message IsXturn={IsXturn} winner={checkWinner(cells)} />   
        <div className="board-row">
          <Cell value={cells[0]} onCellClick={() => handleClick(0,cells,IsXturn, updateStep)} />
          <Cell value={cells[1]} onCellClick={() => handleClick(1,cells,IsXturn, updateStep)} />
          <Cell value={cells[2]} onCellClick={() => handleClick(2,cells,IsXturn, updateStep)} />
        </div>
        <div className="board-row">
          <Cell value={cells[3]} onCellClick={() => handleClick(3,cells,IsXturn, updateStep)} />
          <Cell value={cells[4]} onCellClick={() => handleClick(4,cells,IsXturn, updateStep)} />
          <Cell value={cells[5]} onCellClick={() => handleClick(5,cells,IsXturn, updateStep)} />
        </div>
        <div className="board-row">
          <Cell value={cells[6]} onCellClick={() => handleClick(6,cells,IsXturn, updateStep)} />
          <Cell value={cells[7]} onCellClick={() => handleClick(7,cells,IsXturn, updateStep)} />
          <Cell value={cells[8]} onCellClick={() => handleClick(8,cells,IsXturn, updateStep)} />
        </div>
      </>
    );
  }
  function handleClick(i,cells,IsXturn, updateStep) {
    if (checkWinner(cells) || cells[i]) {
      return;
    }
    const nextCells = cells.slice();
    if (IsXturn) {
      nextCells[i] = 'X';
    } else {
      nextCells[i] = 'O';
    }
    updateStep(nextCells);
  }
  function checkWinner(cells) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        alert(cells[a] + " is the winner!");
      return cells[a];
    }
  }
  return null;
}

export default Board;
