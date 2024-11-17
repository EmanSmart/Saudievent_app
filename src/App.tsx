import { Routes, Route, HashRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout";
import EventDetails from "./components/event-details/eventDetails.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import "./index.css";
// // @ts-expect-error  // to skip the error
// import TWKHelper from "./Twkhelper.js";

function App() {
  // console.log("console App ", TWKHelper.getRawData());
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
