import React from "react";
import Cell from "./Cell";
import pictureB from "../assets/images/b.jpg";
import pictureX from "../assets/images/x.png";
import pictureO from "../assets/images/o.png";

function Board() {
  const grid = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => (
      <Cell pictureB={pictureB} pictureX={pictureX} pictureO={pictureO} />
    ))
  );
  let arr: any = [];
  for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
      arr[i][j] = (
        <Cell pictureB={pictureB} pictureX={pictureX} pictureO={pictureO} />
      );
    }
  }

  return (
    <div className="board">
      <table>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="cell-container">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Board;
