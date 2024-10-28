import { Link } from "react-router-dom";
import "./EventCard.css";

interface EventCardProps {
  id: number;
  title: string;
  dates: { startDate: string; endDate: string; times: { startTime: string; endTime: string }[] }[];
  image: string;
}

const EventCard: React.FC<EventCardProps> = ({ id, title, dates, image }) => {
const formatTime = (startTime: string, endTime: string) => {
  const formattedStartTime = new Date(startTime).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const formattedEndTime = new Date(endTime).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return `${formattedStartTime} - ${formattedEndTime}`;
};
const formatDate = (startDate: string, endDate: string) => {
  const formattedStartDate = new Date(startDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });

  const formattedEndDate = new Date(endDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });

  return `${formattedStartDate} - ${formattedEndDate}`;
};


  return (
    <div className="event-card mb-4 mx-4">
      <div className="row g-0">
        <div className="col-4 m-auto">
          <img src={image} className="card-img" alt="event image" />
        </div>
        <div className="col-8 m-auto">
          <div className="card-body ms-4 p-0 mb-1">
            <h4 className="card-title row my-1">{title}</h4>
            <div className="card-text">
              {dates.map((dateObj, index) => (
                <div key={index}>
                  <small className="row d-flex align-items-center">
                    <img
                      src="./images/calendar-days-solid.svg"
                      className="event-icon"
                      alt=""
                    />
                    {formatDate(dateObj.startDate, dateObj.endDate)}
                  </small>
                  {dateObj.times.map((time, timeIndex) => (
                    <small key={timeIndex} className="row d-flex align-items-center">
                      <img
                        src="./images/clock-regular.svg"
                        className="event-icon"
                        alt=""
                      />
                      {formatTime(time.startTime, time.endTime)}
                    </small>
                  ))}
                </div>
              ))}
            </div>
            <div className="w-100 d-flex justify-content-start mt-3">
              <Link to={`/event/${id}`} className="card-btn btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default EventCard;
