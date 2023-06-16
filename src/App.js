import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import Starfield from './components/Starfield';
import Viewport from './components/Viewport';
import InfoCard from "./components/InfoCard";
import SolarSystem from "./components/SolarSystem";
import LoadingScreen from "./components/LoadingScreen";
import { useState, useEffect } from "react";
import "./index.css";

function App() {
  
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
  setTimeout(() => {
    setAppLoaded(true);
  }, 3000);
  }, []);
  
  if (!appLoaded) {
    return (
      <LoadingScreen />
    )
  }

  return (
  <>
    <BrowserRouter>
      <Starfield />
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
