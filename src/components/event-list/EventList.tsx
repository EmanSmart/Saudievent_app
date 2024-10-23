import { useEffect, useState } from "react";
import EventCard from "../event-card/EventCard";
import "./EventList.css";

interface Event {
  id: number;
  date: string;
  time: string;
  title: string;
  img: string;
}
interface Season {
  _id: string;
  title: string;
}

interface Zone {
  _id: string;
  name: string;
}
const events: Event[] = [
  {
    id: 1,
    date: "10 Oct - 13 Oct",
    time: "11 PM - 1AM",
    title: "Event 1",
    img: "images/image.jpeg",
  },
  {
    id: 2,
    date: "10 Oct - 13 Oct",
    time: "11 PM - 1AM",
    title: "Event 1",
    img: "images/image.jpeg",
  },
  {
    id: 3,
    date: "10 Oct - 13 Oct",
    time: "11 PM - 1AM",
    title: "Event 1",
    img: "images/image.jpeg",
  },
  {
    id: 4,
    date: "10 Oct - 13 Oct",
    time: "11 PM - 1AM",
    title: "Event 1",
    img: "images/image.jpeg",
  },
  {
    id: 4,
    date: "10 Oct - 13 Oct",
    time: "11 PM - 1AM",
    title: "Event 1",
    img: "images/image.jpeg",
  },
  {
    id: 4,
    date: "10 Oct - 13 Oct",
    time: "11 PM - 1AM",
    title: "Event 1",
    img: "images/image.jpeg",
  },
  {
    id: 4,
    date: "10 Oct - 13 Oct",
    time: "11 PM - 1AM",
    title: "Event 1",
    img: "images/image.jpeg",
  },
];
const URL = "/twk/";
const EventList = () => {
  const [seasons, setSeasons] = useState([]);
  const [selectedSeasonId, setSelectedSeasonId] = useState<string>("");
  const [zones, setZones] = useState<Zone[]>([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}${URL}season/active`)
      .then((response) => response.json())
      .then((data) => {
        setSeasons(data.result);
      })
      .catch((error) => console.error("Error fetching seasons:", error));
  }, []);

  useEffect(() => {
    if (selectedSeasonId) {
      fetch(
        `${import.meta.env.VITE_API_URL}${URL}zone?seasonId=${selectedSeasonId}`
      )
        .then((response) => response.json())
        .then((data) => {
          setZones(data.data);
        })
        .catch((error) => console.error("Error fetching zones:", error));
    }
  }, [selectedSeasonId]);

  const handleSeasonChange = (seasonId: string) => {
    setSelectedSeasonId(seasonId);
    setZones(zones);
  };

  return (
    <div className="list row">
      {/* <div className="col-3">
        <div className="time">
          <div className="time-card">10 Oct</div>
        </div>
      </div> */}
      <div className="row m-0 mb-5">
        <div className="col">
          <div className="dropdown col-12 my-2">
            <button
              className="btn btn-secondary dropdown-toggle w-100"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All Seasons
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {seasons.map((season: Season, index) => (
                <li
                  className="dropdown-item"
                  key={index}
                  onClick={() => handleSeasonChange(season._id)}
                >
                  {season.title} <hr className="dropdown-divider"></hr>
                </li>
              ))}
            </ul>
          </div>
          <div className="row m-0 p-0 d-flex justify-content-center">
            <div className="dropdown col-6 ">
              <button
                className="btn btn-secondary dropdown-toggle w-100"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Interest
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown col-6 ">
              <button
                className="btn btn-secondary dropdown-toggle w-100"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                disabled={!selectedSeasonId}
              >
                Zone
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {zones.map((zone) => (
                  <li key={zone._id} className="dropdown-item">
                    {zone.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-2">
            <button type="button" className="btn btn-primary apply ">
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className="card-col  ">
        {events.map((event) => (
          <EventCard
            title={event.title}
            date={event.date}
            image={event.img}
            time={event.time}
          />
        ))}
      </div>
    </div>
  );
};

export default EventList;
