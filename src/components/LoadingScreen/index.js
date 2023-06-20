import { useState } from "react";
import "./LoadingScreen.css";

// This loading screen will be displayed for 3 seconds when the app is first loaded
// This gives the app time to load the assets to avoid the white flash on first load

const LoadingScreen = () => {
  
  // Some flavor text to display while the app is loading
  const loadingText = ["Fetching planetary data...", "Parsing atmospheric variables...", "Populating universe..."];
  
  // A state variable to hold the index of the loading text
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);
  
  // A timeout to change the loading text every second
  setTimeout(() => {
    if (loadingTextIndex < 2) setLoadingTextIndex(loadingTextIndex + 1);
  }, 1000);
  
  return (
    <div className="loading-screen">
      <h1 className="loading-title">Welcome to Solarium</h1>
      <div className="loading-bar"></div>
      <div className="loading-text">{loadingText[loadingTextIndex]}</div>
    </div>
  )
}

export default LoadingScreen;
