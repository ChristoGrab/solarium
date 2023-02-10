import "./Sun.css"
import { useParams, useLocation } from "react-router-dom"

const Sun = ( {planet} ) => {
  
  console.log("planet in Sun Component", planet)
  
  return (
    <div className={`sun sun-${planet}`}></div>
  )
}

export default Sun;
