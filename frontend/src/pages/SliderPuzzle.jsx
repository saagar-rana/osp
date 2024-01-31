import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import {
  puzzlePiece1,
  puzzlePiece2,
  puzzlePiece3,
  puzzlePiece4,
  puzzlePiece5,
  puzzlePiece6,
  puzzlePiece7,
  puzzlePiece8,
  puzzlePiece9,
  puzzlePiece10,
  background1,
  background2,
  background3,
  background4,
  background5,
  background6,
  background7,
  background8,
  background9,
  background10
} from "../assets";

const puzzlePieceImages = [
  { path: puzzlePiece1, marginBottom: '31px', puzzlePieceSize: 21 },
  { path: puzzlePiece2, marginBottom: '16px', puzzlePieceSize: 10 },
  { path: puzzlePiece3, marginBottom: '47px', puzzlePieceSize: 11 },
  { path: puzzlePiece4, marginBottom: '150px', puzzlePieceSize: 11 },
  { path: puzzlePiece5, marginBottom: '70px', puzzlePieceSize: 11 },
  { path: puzzlePiece6, marginBottom: '125px', puzzlePieceSize: 18 },
  { path: puzzlePiece7, marginBottom: '50px', puzzlePieceSize: 18 },
  { path: puzzlePiece8, marginBottom: '-10px', puzzlePieceSize: 19 },
  { path: puzzlePiece9, marginBottom: '137px', puzzlePieceSize: 18 },
  { path: puzzlePiece10, marginBottom: '126px', puzzlePieceSize: 17 },
];

const backgroundImageImages = [
  { path: background1,  minPuzzleValue: 52, maxPuzzleValue: 54, allowedPuzzlePieceIndex: 0 },
  { path: background2,  minPuzzleValue: 52, maxPuzzleValue: 54, allowedPuzzlePieceIndex: 1 },
  { path: background3,  minPuzzleValue: 57, maxPuzzleValue: 59, allowedPuzzlePieceIndex: 2 },
  { path: background4,  minPuzzleValue: 75, maxPuzzleValue: 77, allowedPuzzlePieceIndex: 3 },
  { path: background5,  minPuzzleValue: 35, maxPuzzleValue: 37, allowedPuzzlePieceIndex: 4 },
  { path: background6,  minPuzzleValue: 48, maxPuzzleValue: 50, allowedPuzzlePieceIndex: 5 },
  { path: background7,  minPuzzleValue: 35, maxPuzzleValue: 37, allowedPuzzlePieceIndex: 6 },
  { path: background8,  minPuzzleValue: 39, maxPuzzleValue: 41, allowedPuzzlePieceIndex: 7 },
  { path: background9,  minPuzzleValue: 73, maxPuzzleValue: 75, allowedPuzzlePieceIndex: 8 },
  { path: background10, minPuzzleValue: 39, maxPuzzleValue: 41, allowedPuzzlePieceIndex: 9 },
];  

const SliderPuzzle = ({ sliderValue, onSliderChange, onPuzzleSolved }) => {
  const [puzzlePiecePosition, setPuzzlePiecePosition] = useState(sliderValue);
  const [selectedPuzzlePiece, setSelectedPuzzlePiece] = useState("");
  const [selectedBackgroundImage, setSelectedBackgroundImage] = useState("");
  const [minRequiredPuzzleValue, setMinRequiredPuzzleValue] = useState(0);
  const [maxRequiredPuzzleValue, setMaxRequiredPuzzleValue] = useState(0);
  const [puzzlePieceMarginBottom, setPuzzlePieceMarginBottom] = useState(0);
  const [puzzlePieceSize, setPuzzlePieceSize] = useState(0);
  const [puzzleSolved,setPuzzleSolved]=useState(false);

  useEffect(() => {
    const randomBackgroundImageIndex = Math.floor(
      Math.random() * backgroundImageImages.length
    );
    const selectedBackgroundInfo =
      backgroundImageImages[randomBackgroundImageIndex];
    setSelectedBackgroundImage(selectedBackgroundInfo.path);
    setMinRequiredPuzzleValue(selectedBackgroundInfo.minPuzzleValue);
    setMaxRequiredPuzzleValue(selectedBackgroundInfo.maxPuzzleValue);

    const allowedPuzzlePieceIndex = selectedBackgroundInfo.allowedPuzzlePieceIndex;
    const selectedPuzzlePieceInfo = puzzlePieceImages[allowedPuzzlePieceIndex];
    setSelectedPuzzlePiece(selectedPuzzlePieceInfo.path);
    setPuzzlePiecePosition(sliderValue);

    setPuzzlePieceSize(selectedPuzzlePieceInfo.puzzlePieceSize);
    setPuzzlePieceMarginBottom(selectedPuzzlePieceInfo.marginBottom);
  }, []);

  const handleSliderChange = (event) => {
    const newValue = Number(event.target.value);
    setPuzzlePiecePosition(newValue);
    onSliderChange(newValue);
  };

  const handlePuzzleSubmit = () => {
    if (sliderValue >= minRequiredPuzzleValue && sliderValue <= maxRequiredPuzzleValue) {
      onPuzzleSolved();
      setPuzzleSolved(true);
    } else {
      setPuzzleSolved(false);
    }
  };

  const puzzlePieceStyle = {
    position: "absolute",
    bottom: "0",
    marginBottom: puzzlePieceMarginBottom,
    left: `${puzzlePiecePosition}%`,
    cursor: "grab",
    zIndex: "1",
    width: `${puzzlePieceSize}%`,
  };

  const backgroundImageStyle = {
    position: "relative",
    width: "300px",
    height: "200px",
    overflow: "hidden",
    border:
      sliderValue >= minRequiredPuzzleValue && sliderValue <= maxRequiredPuzzleValue
        ? "4px solid green"
        : "2px solid transparent",
  };

  return (
    <div className="flex flex-col items-center">
      <div style={backgroundImageStyle} className="my-6">
        <img
          src={selectedBackgroundImage}
          alt="Puzzle Background"
          className="w-full h-full object-cover"
        />
        <img
          src={selectedPuzzlePiece}
          alt="Puzzle Piece"
          style={puzzlePieceStyle}
          draggable="false"
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
      <label htmlFor="rangeinput" className="mb-2">
        Slide to solve the puzzle:
      </label>
      <input
        id="rangeinput"
        type="range"
        min="0"
        max="100"
        value={puzzlePiecePosition}
        onChange={handleSliderChange}
        style={{ height: "30px", width: "80%" }}
        className="slider"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handlePuzzleSubmit}
        className="my-4"
        disabled={puzzleSolved}
      >
        Verify
      </Button>
    </div>
  );
};

export default SliderPuzzle;
