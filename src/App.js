import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import Viewport from './components/Viewport';
import InfoCard from "./components/InfoCard";

function App() {

  return (
  <>
    <BrowserRouter>
      <Navigation />
      <Viewport />
      <Routes>
        <Route path="/:planet" element={<InfoCard />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
