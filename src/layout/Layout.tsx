import EventList from "../components/event-list/EventList";
import "./Layout.css";
// import HeaderEvent from "../components/Header-eventList/Header/HeaderEvent";

const Layout = () => {
  return (
    <div className="layout">
      {/* <HeaderEvent /> */}
      <EventList />
    </div>
  );
};

export default Layout;
