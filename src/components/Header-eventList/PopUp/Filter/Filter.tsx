import React, { useState } from "react";
import "./filter.css";
import Zones from "./Components/Zones";
import Interest from "./Components/Interest";
import PriceRange from "./Components/PriceRange";
import FooterEvents from "./Components/Footer";

interface FilterProps {
  setFilter: (value: boolean) => void;
}

const Filter: React.FC<FilterProps> = ({ setFilter }) => {
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(500);
  return (
    <div className="position-absolute filter filter-content">
      <nav className="bg-light d-flex align-items-center px-3">
        <svg
        role="button"
          onClick={() => setFilter(false)}
          width="23"
          height="19"
          viewBox="0 0 23 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.361 8.47412H2.11097V10.8071H21.361V8.47412ZM2.11097 8.47412C1.46697 8.47412 0.94397 8.99612 0.94397 9.64012C0.94397 10.2851 1.46697 10.8071 2.11097 10.8071V8.47412ZM21.361 10.8071C22.004 10.8071 22.528 10.2851 22.528 9.64012C22.528 8.99612 22.004 8.47412 21.361 8.47412V10.8071Z"
            fill="#2E245A"
          />
          <path
            d="M1.28499 10.4651L9.15999 18.3401L10.81 16.6901L2.93499 8.81515L1.28499 10.4651ZM9.15999 0.940143L1.28499 8.81515L2.93499 10.4651L10.81 2.59014L9.15999 0.940143ZM9.15999 18.3401C9.61599 18.7961 10.354 18.7961 10.81 18.3401C11.266 17.8841 11.266 17.1461 10.81 16.6901L9.15999 18.3401ZM2.10999 9.64014L1.28499 8.81515C0.828993 9.27115 0.828993 10.0091 1.28499 10.4651L2.10999 9.64014ZM10.81 2.59014C11.266 2.13414 11.266 1.39614 10.81 0.940143C10.354 0.484145 9.61599 0.484145 9.15999 0.940143L10.81 2.59014Z"
            fill="#2E245A"
          />
        </svg>
        <h2 className="text-center flex-fill fw-bold p-0 m-0">Filter by</h2>
      </nav>
      <div className="px-3 ">
        <div className="">
          <h3 className="fw-semibold py-2 pt-4">Select Zones</h3>
          <Zones
            selectedPlaces={selectedPlaces}
            setSelectedPlaces={setSelectedPlaces}
          />
        </div>
        <div className="">
          <h3 className="fw-semibold">Select Interest</h3>
          <Interest
            selectedInterests={selectedInterests}
            setSelectedInterests={setSelectedInterests}
          />
        </div>
        <div className="">
          <h3 className="fw-semibold">Price Range</h3>
          <PriceRange
            setMinValue={setMinValue}
            minValue={minValue}
            maxValue={maxValue}
            setMaxValue={setMaxValue}
          />
        </div>
      </div>
      <FooterEvents
        setFilter={setFilter}
        selectedPlaces={selectedPlaces}
        setSelectedPlaces={setSelectedPlaces}
        setMinValue={setMinValue}
        minValue={minValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        setSelectedInterests={setSelectedInterests}
        selectedInterests={selectedInterests}
      />
    </div>
  );
};

export default Filter;
