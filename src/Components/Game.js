import { useState } from 'react';
import React from 'react';
import Board from './Board';
import StepsList from './StepsList';

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentState, setCurrentMove] = useState(0);
    const IsXturn = currentState % 2 === 0;
    const currentCells = history[currentState];
  
    function updateStep(nextCells) {
      const nextHistory = [...history.slice(0, currentState + 1), nextCells];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
  
    function jumpTo(nextMove) {
      setCurrentMove(nextMove);
    }
  
    return (
      <div >
        <div className="game-board">
          <Board IsXturn={IsXturn} cells={currentCells} updateStep={updateStep} />
        </div>
        <div className="game-info"> 
        <StepsList history={history} jumpTo={jumpTo} />
        </div>
      </div>
    );
  }

export default Game;