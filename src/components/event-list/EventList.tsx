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
interface Interst {
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
  const [selectedSeasonTitle, setSelectedSeasonTitle] = useState<string>("All Seasons");
  // const [selectedZoneId, setSelectedZoneId] = useState<string>("Zones");
  const [selectedZoneTitle, setSelectedZoneTitle] = useState<string>("Zones");
  // const [selectedInterstId, setSelectedInterstId] = useState<string>("Zones");
  const [selectedInterstTitle, setSelectedInterestTitle] = useState<string>("Interest");

  const [zones, setZones] = useState<Zone[]>([]);
  const [Intersts, setIntersts] = useState<Interst[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}${URL}season/active`)
      .then((response) => response.json())
      .then((data) => {
        setSeasons(data.result);
      })
      .catch((error) => console.error("Error fetching seasons:", error));
  }, []);
// =============================Zone fetch
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
    }else{
      fetch(
        `${import.meta.env.VITE_API_URL}${URL}zone`
      )
        .then((response) => response.json())
        .then((data) => {
          setZones(data.data);
        })
        .catch((error) => console.error("Error fetching zones:", error));
    }
  }, [selectedSeasonId]);
// =============================Interst fetch
useEffect(() => {
  if (selectedSeasonId) {
    fetch(
      `${import.meta.env.VITE_API_URL}${URL}interest?seasonId=${selectedSeasonId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setIntersts(data.data);
      })
      .catch((error) => console.error("Error fetching Intersts:", error));
  }else{
    fetch(
      `${import.meta.env.VITE_API_URL}${URL}interest`
    )
      .then((response) => response.json())
      .then((data) => {
        setIntersts(data.data);
      })
      .catch((error) => console.error("Error fetching Interts:", error));
  }
}, [selectedSeasonId]);

  const handleSeasonChange = (seasonId: string , seasonTitle: string) => {
    setSelectedSeasonId(seasonId);
    setSelectedSeasonTitle(seasonTitle);
    setZones(zones);
    setIntersts(Intersts)
  };
  const handleZoneChange = ( zoneTitle: string) => {
    // setSelectedZoneId(zoneId);
    setSelectedZoneTitle(zoneTitle);
  };
  const handleInterestChange = ( interstTitle: string) => {
    // setSelectedInterstId(interstId);
    setSelectedInterestTitle(interstTitle);
  };
  const handleClearAll=()=>{
    setSelectedSeasonId("");
    setSelectedSeasonTitle("All Seasons");
    setSelectedZoneTitle("Zones");
    setSelectedInterestTitle("Interest");
  }

  return (
    <section className="container">

    <div className="list row">
      {/* <div className="col-3">
        <div className="time">
          <div className="time-card">10 Oct</div>
        </div>
      </div> */}
      <div className="row m-0 mb-5">
        <div className="col ">
          <div className="dropdown col-12 my-2">
            <button
              className="btn btn-secondary dropdown-toggle w-100"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {/* {selectedSeasonId ? (
                <span>{seasons.find((s) => s._id === selectedSeasonId)?.title}</span>
              ) : (
                <span>All Seasons</span>
              )} */}
              <span>{selectedSeasonTitle}</span>
             
            </button>
            <ul className="menu_style dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
              {seasons.map((season: Season, index) => (
                <li
                  className="dropdown-item"
                  key={index}
                  onClick={() => handleSeasonChange(season._id , season.title)}
                >
                  {season.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="row m-0 p-0 d-flex">
            <div className="dropdown col-6 p-0">
              <button
                className="btn btn-secondary dropdown-toggle w-100 overflow-hidden"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedInterstTitle}
              </button>
              <ul
                className="menu_style dropdown-menu w-100"
                aria-labelledby="dropdownMenuButton1"

              >
                {Intersts.map((Interst) => (
                  <li key={Interst._id} className="dropdown-item"
                  onClick={() => handleInterestChange( Interst.name)}
                  >
                    {Interst.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="dropdown col-6 p-0">
              <button
                className="btn btn-secondary dropdown-toggle w-100 overflow-hidden"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                // disabled={!selectedSeasonId}
              >
                {selectedZoneTitle}
              </button>
              <ul
                className="menu_style dropdown-menu w-100"
                aria-labelledby="dropdownMenuButton1"
              >
                {zones.map((zone) => (
                  <li key={zone._id} className="dropdown-item"
                  onClick={() => handleZoneChange( zone.name)}
                  >
                    {zone.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className=" d-flex justify-content-between mt-2">

            <button type="button" className="btn btn-primary apply w-50 mx-1 fw-bold" style={{backgroundColor: "#ccc"}}
                  onClick={() => handleClearAll()}
          
            >
              Clear
            </button>

            <button type="button" className="btn btn-primary apply  w-50 mx-1 fw-bold">
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
    </section>
  );
};

export default EventList;
