import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import './App.css';
import axios from 'axios';
import Navigation from './components/Navigation';
import Viewport from './components/Viewport';
import InfoCard from "./components/InfoCard";
import { useEffect } from "react";
import normalizeSolarSystemData from "./functions/normalizeData";

function App() {
  
  const [data, setData] = useState(null)
  
  const fetchData = async () => {
    return axios.get("https://api.le-systeme-solaire.net/rest/bodies/")
    .then((response) => setData(normalizeSolarSystemData(response.data)))
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  console.log(data)

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
