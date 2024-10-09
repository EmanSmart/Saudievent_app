import React from "react";
import "./CustomSlider.css";

interface PriceRangeProps {
  setMinValue: React.Dispatch<React.SetStateAction<number>>;
  minValue: number;
  maxValue: number;
  setMaxValue: React.Dispatch<React.SetStateAction<number>>;
}

const PriceRange: React.FC<PriceRangeProps> = ({
  setMinValue,
  minValue,
  maxValue,
  setMaxValue,
}) => {
  const min = 0;
  const max = 500;

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="slider-container">
      <div className="slider m-0">
        <div className="slider ">
          <input
            type="range"
            min={min}
            max={max}
            value={minValue}
            onChange={handleMinChange}
            className="range-input"
          />
          <input
            type="range"
            min={min}
            max={max}
            value={maxValue}
            onChange={handleMaxChange}
            className="range-input"
          />

          <div
            className="range-highlight"
            style={{
              left: `${(minValue / max) * 100}%`,
              right: `${100 - (maxValue / max) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="value-display">
        <span>SAR {minValue}</span>
        <span>SAR {maxValue}+</span>
      </div>
    </div>
  );
};

export default PriceRange;
