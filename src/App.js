import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import Viewport from './components/Viewport';
import InfoCard from "./components/InfoCard";
import PlanetProvider from "./context/PlanetContext";

function App() {

  return (
  <>
    <BrowserRouter>
      <Navigation />
      <Viewport />
      <Routes>
        {/* <Route path="/" element={<System />} /> */}
        <Route path="/:planet" element={<InfoCard />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
