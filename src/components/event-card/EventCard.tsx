import { Link } from "react-router-dom";
import "./EventCard.css";
interface EventCardProps {
    title: string;
    date: string;
    image: string;
  }
  
  const EventCard: React.FC<EventCardProps> = ({ title, date, image }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-4 p-3">
          <img src={image} className="card-img" alt="event image" />
        </div>
        <div className="col-8">
          <div className="card-body pb-1">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Event Date</p>
            <p className="card-text">
              <small>{date}</small>
            </p>
            <div className="w-100 d-flex justify-content-end">
              <Link to={'/event-details'} className="card-btn btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
