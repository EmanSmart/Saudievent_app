import { Routes, Route, HashRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout";
import EventDetails from "./components/event-details/eventDetails.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import "./index.css";
import { useEffect } from "react";
//  @ts-expect-error  // to skip the error
import TWKHelper from "./Twkhelper.js";

function App() {
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_DEV}/twk/logs/${TWKHelper.getUserId()}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.data == false) {
          try {
            const response = await fetch(`${import.meta.env.VITE_API_URL_DEV}/twk/logs`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                national_id: TWKHelper.getUserId(), "data": {
                  "key1": 1,
                  "key2": 2,
                  "key3": "value",
                  "key4": true
                }
              }),
            });

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error("Error fetching logs:", error);
          }
        }
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };
    fetchLogs();
  }, []);
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
