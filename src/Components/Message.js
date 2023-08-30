import React from 'react';

function Message({ IsXturn, winner }) {
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (IsXturn ? 'X' : 'O');
    }
  return (
    <div className="status">{status}</div>
  );
}

export default Message;