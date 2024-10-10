import React, { useEffect } from "react";
import check from "../../../../../assets/images/check.png";

const touristPlaces: string[] = [
  "Jeddah Yacht Club",
  "Events And More",
  "Fakieh Aquarium",
  "Warner Bros",
  "IMAGINE MONET",
  "City Walk",
  "Prince Majid Park",
  "Jeddah Promenade",
  "Cyan Waterpark",
];

interface ZonesProps {
  selectedPlaces: string[];
  setSelectedPlaces: React.Dispatch<React.SetStateAction<string[]>>;
}

const Zones: React.FC<ZonesProps> = ({ selectedPlaces, setSelectedPlaces }) => {
  // Retrieve stored places from sessionStorage on component mount
  useEffect(() => {
    
    const storedFilter = sessionStorage.getItem("filter");
    if (storedFilter) {
      const parsedFilter = JSON.parse(storedFilter);
      if (parsedFilter.selectedPlaces) {
        setSelectedPlaces(parsedFilter.selectedPlaces);
      }
    }
  }, [setSelectedPlaces]);

  const handleCheckboxChange = (place: string) => {
    let updatedPlaces;
    if (selectedPlaces.includes(place)) {
      updatedPlaces = selectedPlaces.filter((item) => item !== place);
    } else {
      updatedPlaces = [...selectedPlaces, place];
    }

    // Update state
    setSelectedPlaces(updatedPlaces);

    // Store the updated selected places in sessionStorage
    sessionStorage.setItem(
      "filter",
      JSON.stringify({
        selectedPlaces: updatedPlaces,
        // Assuming other filter values are already stored, retrieve them from sessionStorage
        ...JSON.parse(sessionStorage.getItem("filter") || "{}"),
      })
    );
  };

  return (
    <div className="zones">
      {touristPlaces.map((place, index) => (
        <div
          key={index}
          className="d-flex justify-content-between"
          style={{
            paddingBottom: index === touristPlaces.length - 1 ? "36px" : "0",
          }}
        >
          {" "}
          <label htmlFor={place} className="custom-checkbox-label">
            {place}
          </label>
          <input
            type="checkbox"
            id={place}
            value={place}
            checked={selectedPlaces.includes(place)}
            onChange={() => handleCheckboxChange(place)}
            className="custom-checkbox-input"
          />
          <label
            htmlFor={place}
            className={`custom-checkbox ${
              selectedPlaces.includes(place) ? "selected" : ""
            }`}
          >
            <span
              className={`custom-checkbox-icon p-1 ${
                selectedPlaces.includes(place) ? "opacity-100" : "opacity-0"
              }`}
            >
              <img width={"100%"} height={"100%"} src={check} alt="check" />
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Zones;
