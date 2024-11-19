import EventList from "../components/event-list/EventList";
import "./Layout.css";
// import HeaderEvent from "../components/Header-eventList/Header/HeaderEvent";

const Layout = () => {
  return (
    <div className="layout">
      {/* <HeaderEvent /> */}
      <EventList />
      <div className="ContactBtn">
        <a href="./contact/index.html" rel="noopener noreferrer">
          <img src="./images/Contact us.png" width="70px" height="70px" />
        </a>
      </div>
    </div>
  );
};

export default Layout;
