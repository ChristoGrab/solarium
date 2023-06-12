import { useState } from "react";

const LoadingScreen = () => {
  
  const loadingText = ["Fetching planetary data...", "Parsing atmospheric variables...", "Populating universe..."];
  
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);
  
  setTimeout(() => {
    if (loadingTextIndex < 2) setLoadingTextIndex(loadingTextIndex + 1);
    else setLoadingTextIndex(0);
  }, 1000);
  
  return (
    <div className="loading-screen">
      <div className="loading-text">Welcome to Solarium</div>
      <div className="loading-bar"></div>
      <div className="loading-update">{loadingText[loadingTextIndex]}</div>
    </div>
  )
}

export default LoadingScreen;
