import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import Viewport from './components/Viewport';

function App() {
  return (
  <>
    <BrowserRouter>
      <Navigation />
      <Viewport />
    </BrowserRouter>
  </>
  );
}

export default App;
