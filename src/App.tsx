import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./layout/Layout.css";
// import Layout from "./layout/Layout";
import EventList from "./components/event-list/EventList";
import HeaderEvent from "./components/Header-eventList/Header/HeaderEvent";

import "bootstrap/dist/js/bootstrap.bundle.min"; 
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return ( 
    <div className="layout">
    <HeaderEvent/>
    <EventList/>
    </div>
  // <Router>
  //   <Routes>
  //     <Route path="/" element={<Layout/>} />
  //   </Routes>
  // </Router>

  );
}

export default App;
