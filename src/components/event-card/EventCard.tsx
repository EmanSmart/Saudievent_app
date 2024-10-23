import "./EventCard.css";
interface EventCardProps {
  title: string;
  date: string;
  image: string;
  time: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, image, time }) => {
  return (
    <div className="card mb-4 mx-4">
      <div className="row g-0">
        <div className="col-4 m-auto">
          <img src={image} className="card-img" alt="event image" />
        </div>
        <div className="col-8 m-auto">
          <div className="card-body ms-4 p-0 mb-1">
            <h4 className="card-title row my-1">{title}</h4>
            <p className="card-text">
              <small className="row d-flex align-items-center">
                <img
                  src="/images/calendar-days-solid.svg"
                  className="event-icon"
                  alt=""
                />
                {date}
              </small>
              <small className="row d-flex align-items-center">
                <img
                  src="/images/clock-regular.svg"
                  className="event-icon"
                  alt=""
                />
                {time}
              </small>
            </p>

            <button className="row card-btn btn btn-primary">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
