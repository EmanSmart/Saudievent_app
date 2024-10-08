import EventCard from "../event-card/EventCard";
import "./EventList.css";
interface Event {
  id: number;
  date: string;
  title: string;
  img: string;
}
const events: Event[] = [
  {
    id: 1,
    date: "Oct 08,2024",
    title: "Event 1",
    img: "images/image.jpeg",
  },
  {
    id: 2,
    date: "Oct 10,2024",
    title: "Event 2",
    img: "images/image.jpeg",
  },
  {
    id: 3,
    date: "Oct 09,2024",
    title: "Event 3",
    img: "images/image.jpeg",
  },
  {
    id: 4,
    date: "Oct 09,2024",
    title: "Event 3",
    img: "images/image.jpeg",
  },
  {
    id: 5,
    date: "Oct 09,2024",
    title: "Event 3",
    img: "images/image.jpeg",
  },
];
const EventList = () => {
  return (
    <div className="list row">
      <div className="col-3">
        <div className="time">
          <div className="time-card">10 Oct</div>
        </div>
      </div>
      <div className="card-col col-9 ">
        {events.map((event) => (
          <EventCard title={event.title} date={event.date} image={event.img} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
