import React from "react";
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
  const handleCheckboxChange = (place: string) => {
    if (selectedPlaces.includes(place)) {
      setSelectedPlaces(selectedPlaces.filter((item) => item !== place));
    } else {
      setSelectedPlaces([...selectedPlaces, place]);
    }
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
