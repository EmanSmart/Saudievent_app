import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; 
import Layout from "./layout/Layout";
import EventDetails from "./components/event-details/eventDetails.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/event-details" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
