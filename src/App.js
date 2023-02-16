import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import Viewport from './components/Viewport';
import InfoCard from "./components/InfoCard";
import SolarSystem from "./components/SolarSystem";
import "./index.css";

function App() {

  return (
  <>
    <BrowserRouter>
      <Navigation />
      <Viewport />
      <Routes>
        <Route path="/" exact element={<SolarSystem />} />
      </Routes>
      <Routes>
        <Route path="/:planet" element={<InfoCard />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
