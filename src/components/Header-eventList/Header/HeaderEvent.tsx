import { useEffect, useState } from "react";
import calender from "../../../assets/images/calendar.png";
import Filter from "../PopUp/Filter/Filter";
import "./Header.css";
import DatesFilter from "../PopUp/Dates/Dates";
const HeaderEvent = () => {
  const [filter, setFilter] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleDates, setIsVisibleDates] = useState(false);
  const [Month,setMonth] = useState('October')
  const [Dates, setDates] = useState(false)
  useEffect(() => {
    if (filter) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 1000);
    }
  }, [filter]);
  useEffect(() => {
    if (Dates) {
      setIsVisibleDates(true);
    } else {
      setTimeout(() => setIsVisibleDates(false), 1000);
    }
  }, [Dates]);
  return (
    <>
      {" "}
      <div className={`filter-container ${filter ? "slide-in" : "slide-out"}`}>
        {isVisible && (
          <div
            className={`filter-container ${filter ? "slide-in" : "slide-out"}`}
          >
            <Filter setFilter={setFilter} />
          </div>
        )}
      </div>
      <div className={`filter-container ${Dates ? "slide-in" : "slide-out"}`}>
        {isVisibleDates && (
          <div
            className={`filter-container ${Dates ? "slide-in" : "slide-out"}`}
          >
            <DatesFilter setDates={setDates} setMonth={setMonth} />
          </div>
        )}
      </div>
      <header className="events-nav px-4 align-items-center d-flex">
        <h1 className="flex-fill  text-center">{Month}</h1>
        <div className="gap-4 d-flex align-items-center">
          <svg
            width="20"
            onClick={() => setFilter(true)}
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="button"
          >
            <path
              d="M15.2918 4.39781C14.9606 4.3175 14.6092 4.27734 14.2478 4.27734C11.6176 4.27734 9.47937 6.41562 9.47937 9.04578C9.47937 9.93924 9.73035 10.7825 10.172 11.5053C10.5435 12.1277 11.0555 12.6598 11.6779 13.0412C12.4207 13.5331 13.3042 13.8142 14.2478 13.8142C15.9946 13.8142 17.5104 12.8806 18.3336 11.5053C18.7753 10.7825 19.0163 9.93924 19.0163 9.04578C19.0163 6.77702 17.4301 4.86964 15.2918 4.39781ZM16.2054 8.61411L13.7659 11.0536C13.6756 11.1439 13.4849 11.2343 13.3543 11.2543L12.4207 11.3848C12.0794 11.435 11.8485 11.1941 11.8987 10.8628L12.0292 9.92921C12.0493 9.7987 12.1396 9.618 12.23 9.51761L14.3181 7.42953L14.6694 7.07818C15.0911 6.65655 15.583 6.45577 16.1953 7.07818C16.8077 7.70058 16.627 8.19249 16.2054 8.61411Z"
              fill="#2E245A"
            />
            <path
              d="M17.9622 2.03956V3.00329C17.9622 3.41488 17.4904 3.66584 17.119 3.47512C16.6572 3.23418 16.1653 3.05348 15.6432 2.93302C15.2015 2.82259 14.7297 2.7724 14.2479 2.7724C10.7845 2.7724 7.9736 5.58327 7.9736 9.04666C7.9736 10.1911 8.28482 11.3154 8.87711 12.2792C9.37903 13.1224 10.0817 13.8251 10.8447 14.297C11.0154 14.4074 11.1961 14.5078 11.3667 14.6082C11.5374 14.6985 11.6578 14.8792 11.6578 15.07V17.148C11.6578 17.7604 11.2563 18.5735 10.7544 18.8747L9.34894 19.7882C8.04385 20.6014 6.24692 19.6878 6.24692 18.0615V12.6908C6.24692 11.978 5.84534 11.0645 5.44382 10.5625L1.63907 6.50684C1.13715 5.99485 0.735596 5.08133 0.735596 4.479V2.13995C0.735596 0.925251 1.63907 0.0117188 2.73334 0.0117188H15.9645C17.0587 0.0117188 17.9622 0.925251 17.9622 2.03956Z"
              fill="#2E245A"
            />
          </svg>
          <img src={calender} width="25" role="button" height="25" onClick={() => setDates(true)}
          />
        </div>
      </header>
    </>
  );
};
export default HeaderEvent;
