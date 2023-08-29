import React, { useState } from "react";

type CellProps = {
  pictureB: string;
  pictureX: string;
  pictureO: string;
};

type CellState = {
  picture: string;
};

const Cell = ({ pictureB, pictureX, pictureO }: CellProps) => {
  const [currentPicture, setCurrentPicture] = useState(pictureB);

  const handleClick = () => {
    // Toggle the current picture when the cell is clicked
    if (currentPicture === pictureB) {
      setCurrentPicture(pictureX);
    } else if (currentPicture === pictureX) {
      setCurrentPicture(pictureO);
    } else {
      setCurrentPicture(pictureB);
    }
  };

  return (
    <div className="cell" onClick={handleClick}>
      <img src={currentPicture} alt="Cell Content" width="150" height="150" />
    </div>
  );
};

export default Cell;
