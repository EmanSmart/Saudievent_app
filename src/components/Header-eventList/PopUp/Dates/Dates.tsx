import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Dates.css";

interface DatesFilterProps {
  setDates: (value: boolean) => void;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const DatesFilter: React.FC<DatesFilterProps> = ({ setDates }) => {
  const today = new Date();
  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(
    today.getMonth()
  );
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(
    today.getMonth()
  );
  const currentYear = today.getFullYear();
  const [daySelected, setDaySelected] = useState(today.getDate());
  const [selectedDate, setSelectedDate] = useState({
    day: daySelected,
    month: selectedMonthIndex + 1,
  });
  const handleDateFilter = () => {
    console.log(
      `Selected Month: ${months[selectedMonthIndex]}, Year: ${currentYear}, Day: ${selectedDate.day}`
    );
    setDates(false);
  };
  const generateDaysInMonth = (monthIndex: number, year: number) => {
    const date = new Date(year, monthIndex + 1, 0);
    return Array.from({ length: date.getDate() }, (_, i) => i + 1);
  };

  const getPreviousMonthDays = (monthIndex: number, year: number) => {
    const prevMonth = monthIndex === 0 ? 11 : monthIndex - 1;
    const prevYear = monthIndex === 0 ? year - 1 : year;
    const date = new Date(prevYear, prevMonth + 1, 0);
    return Array.from({ length: date.getDate() }, (_, i) => i + 1);
  };

  const getFirstDayOfMonth = (monthIndex: number, year: number) => {
    return new Date(year, monthIndex, 1).getDay();
  };

  const getLastDayOfMonth = (monthIndex: number, year: number) => {
    return new Date(year, monthIndex + 1, 0).getDay();
  };

  const isPastDay = (day: number, monthIndex: number) => {
    return new Date(currentYear, monthIndex, day) < today;
  };
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Update animationKey to trigger re-render when the month changes
    setAnimationKey((prevKey) => prevKey + 1);
  }, [currentMonthIndex]);

  return (
    <div
      className="position-absolute filter filter-dates filter-content d-flex flex-column z-50"
      role="dialog"
      aria-labelledby="dates-filter-title"
    >
      <nav className="d-flex align-items-center px-5">
        <svg
          width="11"
          height="20"
          viewBox="0 0 11 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setDates(false)}
          role="button"
        >
          <path
            d="M0.839981 10.806L8.71498 18.681L10.365 17.031L2.48997 9.15597L0.839981 10.806ZM8.71498 1.28097L0.839981 9.15597L2.48997 10.806L10.365 2.93096L8.71498 1.28097ZM8.71498 18.681C9.17097 19.137 9.90898 19.137 10.365 18.681C10.821 18.225 10.821 17.487 10.365 17.031L8.71498 18.681ZM1.66499 9.98096L0.839981 9.15597C0.383987 9.61196 0.383987 10.35 0.839981 10.806L1.66499 9.98096ZM10.365 2.93096C10.821 2.47496 10.821 1.73696 10.365 1.28097C9.90898 0.824965 9.17097 0.824965 8.71498 1.28097L10.365 2.93096Z"
            fill="white"
          />
        </svg>
      </nav>

      <div className="px-3 my-3">
        <h2 className="fw-bold p-0 m-0" id="dates-filter-title">
          Select Dates
        </h2>
      </div>
      <h3
        key={animationKey}
        className="p-0 px-3 fw-bold month-slide-up m-0"
        style={{ fontSize: "25px", overflow: "hidden", height: "35px" }}
      >
        {months[currentMonthIndex]}
      </h3>

      <div className="day-names px-3">
        {dayNames.map((day) => (
          <div key={day} className="day-name fw-normal">
            {day}
          </div>
        ))}
      </div>
      <Swiper
        direction="vertical"
        spaceBetween={50}
        className="w-100 px-3"
        style={{ height: "250px", overflow: "hidden" }}
        initialSlide={currentMonthIndex}
        onSlideChange={(swiper) => {
          const newMonthIndex = swiper.realIndex % 12;
          setCurrentMonthIndex(newMonthIndex);
        }}
        loop={true}
      >
        {months.map((month, index) => (
          <SwiperSlide key={index}>
            <div className="days-container">
              <div className="days-grid">
                {/* الأيام من الشهر السابق */}
                {Array.from({
                  length: getFirstDayOfMonth(index, currentYear),
                }).map((_, i) => {
                  const previousMonthDays = getPreviousMonthDays(
                    index,
                    currentYear
                  );
                  const dayFromPrevMonth =
                    previousMonthDays[
                      previousMonthDays.length -
                        getFirstDayOfMonth(index, currentYear) +
                        i
                    ];

                  return (
                    <div
                      key={`prev-${i}`}
                      onClick={() => {
                        if (
                          !isPastDay(
                            dayFromPrevMonth,
                            index === 0 ? 11 : index - 1
                          )
                        ) {
                          setDaySelected(dayFromPrevMonth);
                          setSelectedMonthIndex(index === 0 ? 11 : index - 1);
                          setSelectedDate({
                            day: dayFromPrevMonth,
                            month: index === 0 ? 12 : index,
                          });
                        }
                      }}
                      className={`day prev-month ${
                        isPastDay(
                          dayFromPrevMonth,
                          index === 0 ? 11 : index - 1
                        )
                          ? "disabled"
                          : ""
                      }`}
                      style={{
                        background:
                          selectedDate.day === dayFromPrevMonth &&
                          selectedMonthIndex === (index === 0 ? 11 : index - 1)
                            ? "#DF2A57"
                            : "",
                      }}
                      role="button"
                      aria-label={`Select ${dayFromPrevMonth} ${
                        months[index === 0 ? 11 : index - 1]
                      }`}
                    >
                      {dayFromPrevMonth}
                    </div>
                  );
                })}

                {/* الأيام من الشهر الحالي */}
                {generateDaysInMonth(index, currentYear).map((day) => {
                  const isPastDayCurrent =
                    isPastDay(day, index) &&
                    !(
                      today.getDate() === day &&
                      today.getMonth() === index &&
                      today.getFullYear() === currentYear
                    );
                  const isSelectedDay =
                    selectedDate.day === day && selectedMonthIndex === index;
                  const isToday =
                    today.getDate() === day &&
                    today.getMonth() === index &&
                    today.getFullYear() === currentYear;

                  return (
                    <div
                      key={day}
                      onClick={() => {
                        if (!isPastDayCurrent) {
                          setDaySelected(day);
                          setSelectedMonthIndex(index);
                          setSelectedDate({ day, month: index + 1 });
                          console.log({ day, month: index + 1 });
                        }
                      }}
                      style={{
                        background: isSelectedDay || isToday ? "#DF2A57" : "",
                        opacity: isPastDayCurrent ? 0.9 : 1,
                      }}
                      className={`day ${isPastDayCurrent ? "disabled" : ""} ${
                        isToday ? "today" : ""
                      }`}
                      role="button"
                      aria-label={`Select ${day} ${months[index]}`}
                    >
                      {day}
                    </div>
                  );
                })}

                {/* الأيام من الشهر التالي */}
                {Array.from({
                  length: 13 - getLastDayOfMonth(index, currentYear),
                }).map((_, i) => {
                  const nextMonthDate = new Date(currentYear, index + 1, i + 1);
                  const dayFromNextMonth = i + 1;

                  const isSelectedDay =
                    selectedDate.day === dayFromNextMonth &&
                    selectedMonthIndex === (index + 1) % 12;
                  const isToday =
                    today.getDate() === dayFromNextMonth &&
                    today.getMonth() === (index + 1) % 12 &&
                    today.getFullYear() === currentYear;

                  return (
                    <div
                      key={`next-${i}`}
                      onClick={() => {
                        if (
                          !(
                            nextMonthDate.getMonth() < new Date().getMonth() ||
                            (nextMonthDate.getMonth() ===
                              new Date().getMonth() &&
                              nextMonthDate.getDate() < new Date().getDate())
                          )
                        ) {
                          setDaySelected(dayFromNextMonth);
                          setSelectedMonthIndex((index + 1) % 12);
                          setSelectedDate({
                            day: dayFromNextMonth,
                            month: (index + 2) % 12 === 0 ? 12 : index + 2,
                          });
                        }
                      }}
                      style={{
                        background: isSelectedDay || isToday ? "#DF2A57" : "",
                        opacity:
                          nextMonthDate.getMonth() < new Date().getMonth() ||
                          (nextMonthDate.getMonth() === new Date().getMonth() &&
                            nextMonthDate.getDate() < new Date().getDate())
                            ? 0.9
                            : 1,
                      }}
                      className={`day next-month ${
                        nextMonthDate.getMonth() < new Date().getMonth() ||
                        (nextMonthDate.getMonth() === new Date().getMonth() &&
                          nextMonthDate.getDate() < new Date().getDate())
                          ? "disabled"
                          : ""
                      }`}
                      role="button"
                      aria-label={`Select ${dayFromNextMonth} ${
                        months[(index + 1) % 12]
                      }`}
                    >
                      {dayFromNextMonth}
                    </div>
                  );
                })}

                {Array.from({
                  length:
                    13 -
                    (getFirstDayOfMonth(index, currentYear) +
                      generateDaysInMonth(index, currentYear).length +
                      (13 - getLastDayOfMonth(index, currentYear))),
                }).map((_, i) => (
                  <div key={`empty-${i}`} className="day empty" />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="buttons flex-fill align-items-end px-3 py-3 gap-3">
        <button
          className="rounded-pill w-50  bg-transparent py-3"
          style={{ height: "fit-content" ,border:"2px solid white"}}
          onClick={() => setDates(false)}
        >
          Cancel
        </button>
        <button
          className="rounded-pill w-50  py-3 "
          style={{ height: "fit-content", background: "#DF2A57" ,border:"2px solid white"}}
          onClick={() => handleDateFilter()}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default DatesFilter;
