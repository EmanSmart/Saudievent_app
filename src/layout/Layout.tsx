import EventList from "../components/event-list/EventList";
import "./Layout.css";
import HeaderEvent from "../components/Header-eventList/Header/HeaderEvent";

const Layout = () => {
  return (
    <div className="layout vh-100">
      <HeaderEvent />
      <EventList />
    </div>
  );
};

export default Layout;
