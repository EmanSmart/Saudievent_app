import React, { useEffect } from "react";
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

  // Retrieve stored min and max values from sessionStorage on component mount
  useEffect(() => {
    
    const storedFilter = sessionStorage.getItem("filter");
    if (storedFilter) {
      const parsedFilter = JSON.parse(storedFilter);
      if (parsedFilter.minValue) {
        setMinValue(parsedFilter.minValue);
      }
      if (parsedFilter.maxValue) {
        setMaxValue(parsedFilter.maxValue);
      }
    }
  }, [setMinValue, setMaxValue]);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxValue - 1);
    setMinValue(value);

    // Update sessionStorage whenever minValue changes
    sessionStorage.setItem(
      "filter",
      JSON.stringify({
        minValue: value,
        maxValue,
        // Merge with other stored filter data
        ...JSON.parse(sessionStorage.getItem("filter") || "{}"),
      })
    );
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minValue + 1);
    setMaxValue(value);

    // Update sessionStorage whenever maxValue changes
    sessionStorage.setItem(
      "filter",
      JSON.stringify({
        minValue,
        maxValue: value,
        // Merge with other stored filter data
        ...JSON.parse(sessionStorage.getItem("filter") || "{}"),
      })
    );
  };

  return (
    <div className="slider-container">
      <div className="slider m-0">
        <div className="slider">
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
