import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout/Layout";
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return ( <Router>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  </Router>);
}

export default App;
