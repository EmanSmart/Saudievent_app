import EventCard from "../event-card/EventCard";
import "./EventList.css";
interface Event {
  id: number;
  date: string;
  time: string;
  title: string;
  img: string;
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
const EventList = () => {
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
              >
                Zone
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
          </div>
          <div className="row d-flex justify-content-center mt-2">
          <button type="button" className="btn btn-primary apply ">Apply</button>
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
