import React from "react";

interface FooterEventsProps {
  selectedPlaces: string[];
  selectedInterests: string[];
  setSelectedPlaces: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedInterests: React.Dispatch<React.SetStateAction<string[]>>;
  minValue: number;
  setMinValue: React.Dispatch<React.SetStateAction<number>>;
  maxValue: number;
  setMaxValue: React.Dispatch<React.SetStateAction<number>>;
  setFilter: (value: boolean) => void;
}

const FooterEvents: React.FC<FooterEventsProps> = ({
  selectedPlaces,
  selectedInterests,
  setSelectedPlaces,
  setSelectedInterests,
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  setFilter,
}) => {
  // Function to handle clearing all filters
  const handleClearAll = () => {
    setSelectedPlaces([]);
    setSelectedInterests([]);
    setMaxValue(500);
    setMinValue(0);
  };

  // Function to handle applying the filter
  const handleApplyFilter = () => {
    sessionStorage.setItem(
      "filter",
      JSON.stringify({
        selectedPlaces: selectedPlaces,
        selectedInterests: selectedInterests,
        minValue: minValue,
        maxValue: maxValue,
      })
    );
    setFilter(false);
  };

  // Function to check if the Apply Filter button should be active or disabled
  const isFilterDisabled = () => {
    return !(
      selectedPlaces.length > 0 ||
      selectedInterests.length > 0 ||
      minValue > 0 ||
      maxValue < 500
    );
  };

  return (
    <footer className="p-3 Footer-events d-flex gap-3 align-items-center">
      <div
        className="rounded-pill border border-light px-4 text-center py-3"
        onClick={handleClearAll}
        role="button"
      >
        Clear All
      </div>
      <div
        className="rounded-pill border border-light flex-fill text-center py-3 fw-bold"
        role="button"
        onClick={handleApplyFilter}
        style={{
          background: isFilterDisabled() ? "rgb(137 143 179)" : "transparent",
        }}
      >
        Apply Filter
      </div>
    </footer>
  );
};

export default FooterEvents;
