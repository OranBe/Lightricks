import React from 'react';

function StepsList({ history, jumpTo}) {
    const moves = history.map((cells, move) => {
        let description;
        if (move > 0) {
          description = 'move to step ' + move;
        } else {
          description = 'Go to game start';
        }
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      });
  return (
    <ol>{moves}</ol>
    );
}

export default StepsList;


