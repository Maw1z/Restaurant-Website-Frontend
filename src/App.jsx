import "@chainlift/liftkit-css/index.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import LocationPage from "./Pages/LocationPage";
import MenuPage from "./Pages/MenuPage";
import ReservationPage from "./Pages/ReservationPage";
import NoPage from "./Pages/NoPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="pages">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
