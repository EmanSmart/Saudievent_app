import  { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
import "./eventDetails.css";
export default function EventDetails() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDates, setShowDates] = useState(false);

  const text =
    "Write here Write here Write here Write here Write here Write here Write here Write here Write here Write here Write here Write here Write here Write here";
  const maxChars = 95;

  const toggleReadMore = () => setIsExpanded((prev) => !prev);
  const toggleDates = () => setShowDates((prev) => !prev);

  const renderText = () => {
    if (isExpanded || text.length <= maxChars) {
      return text;
    }
    return `${text.substring(0, maxChars)}...`;
  };

  const isTruncated = text.length > maxChars;

  const CalenderDates = [
    { day: "23 Oct", time: "12:00 PM - 1:00 AM" },
    { day: "24 Oct", time: "12:00 PM - 1:00 AM" },
    { day: "25 Oct", time: "12:00 PM - 1:00 AM" },
    { day: "26 Oct", time: "12:00 PM - 1:00 AM" },
    { day: "27 Oct", time: "12:00 PM - 1:00 AM" },
    { day: "28 Oct", time: "12:00 PM - 1:00 AM" },
  ];

  const firstDate = CalenderDates[0];
  const otherDates = CalenderDates.length > 0 ? CalenderDates.slice(1) : null;

  return (
    <div className="container-eventDetails">
      <div
        style={{
          minHeight: "618px",
          // backgroundImage:
          //   'url("https://cdn.prod.website-files.com/60414b21f1ffcdbb0d5ad688/65bd3f2ed08408ced197152d_restaurant-terms.jpg")',
          // backgroundSize: "cover",
        }}
        className=" position-relative"
      >
        <img
          src="https://cdn.prod.website-files.com/60414b21f1ffcdbb0d5ad688/65bd3f2ed08408ced197152d_restaurant-terms.jpg"
          height={"600px"}
          style={{ height: "600px" }}
          width={"100%"}
          className="position-absolute inset-0"
        />
        <div className="position-absolute  left-0 w-100 event-overlay-1"></div>
        <div className="position-absolute  left-0 w-100 top-0 event-overlay-2"></div>
        <Container
          className="d-flex flex-column justify-content-end h-100"
          style={{ minHeight: "inherit" }}
        >
          <div className="d-flex align-items-center flex-column gap-3 flex-fill justify-content-center z-50 position-relative event-actions">
            <div className="d-flex flex-column justify-content-center text-align-center align-items-center ">
              <FaHeart size={27} role="button" />
              <p className="fs-14">FAV</p>
            </div>
            <div className="d-flex flex-column justify-content-center text-align-center align-items-center">
              <FaShareAlt size={27} role="button" />
              <p className="fs-14">Share</p>
            </div>
          </div>

          <div className="position-relative z-50">
            <h2>Les Deux Magots</h2>
            <div className="d-flex align-items-center">
              <IoLocationOutline className="me-2" size={24} />
              <span>Boulevard City</span>
            </div>
          </div>
          <Row className="z-50 position-relative">
            {" "}
            <div className="d-flex mt-2 gap-2">
              <div className="d-flex flex-column flex-fill">
                <div className="d-flex align-items-start gap-3 my-2">
                  <div
                    style={{ width: "40%" }}
                    className="d-flex align-items-center gap-2 fs-14"
                  >
                    <MdOutlineDateRange size={24} />
                    <span>{firstDate.day}</span>
                  </div>
                  <div
                    style={{ width: "60%" }}
                    className="d-flex align-items-center gap-2 fs-14"
                  >
                    <LuClock3 size={24} />
                    <span>{firstDate.time}</span>
                  </div>
                </div>

                {showDates &&
                  otherDates &&
                  otherDates?.map((date, index) => (
                    <div
                      key={index}
                      className="d-flex align-items-start gap-3 my-2"
                    >
                      <div
                        className="d-flex align-items-center gap-2 fs-14"
                        style={{ width: "40%" }}
                      >
                        <MdOutlineDateRange size={24} />
                        <span>{date.day}</span>
                      </div>
                      <div
                        className="d-flex align-items-center gap-2 fs-14"
                        style={{ width: "60%" }}
                      >
                        <LuClock3 size={24} />
                        <span>{date.time}</span>
                      </div>
                    </div>
                  ))}
              </div>

              {otherDates && otherDates?.length > 0 && (
                <div className="flex-fill">
                  {showDates ? (
                    <IoIosArrowUp
                      size={30}
                      className="d-block ms-auto"
                      onClick={toggleDates}
                      role="button"
                    />
                  ) : (
                    <IoIosArrowDown
                      size={30}
                      className="d-block ms-auto"
                      onClick={toggleDates}
                      role="button"
                    />
                  )}
                </div>
              )}
            </div>
          </Row>
        </Container>
      </div>

      <Container className="">
        <Row className="mt-4">
          <Col>
            <h5>About event</h5>
            <p className="mb-1 d-inline">{renderText()}</p>
            {isTruncated && (
              <span
                role="button"
                onClick={toggleReadMore}
                className="p-0 ps-3 fs-14"
                style={{
                  float: "right",
                  color: "#f48337",
                }}
              >
                {isExpanded ? "See Less" : "See More"}
              </span>
            )}
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <h5>Gallery</h5>
            <Card style={{ width: "150px" }} className="mt-2">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150"
                alt="Event"
              />
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="position-sticky d-flex justify-content-center event-btn-container">
        <Button className=" rounded-pill  py-2   px-3 ">
          Tickets Inside The Zone
        </Button>
      </div>
    </div>
  );
}
