import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import HowItWorks from "./Pages/HowItWorks/HowItWorks";
import Login from "./Pages/Login/Login";
import Host from "./Pages/Host/Host";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/host" element={<Host />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
