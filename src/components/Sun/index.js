import { useNavigate } from "react-router-dom";
import "./Sun.css"

const Sun = ( {planet} ) => {
  
  const navigate = useNavigate()
  
  const sunEasterEgg = (e) => {
    e.preventDefault();
    
    return navigate('/sun')
  }
  
  return (
    <div className={`sun sun-${planet}`} onClick={sunEasterEgg}></div>
  )
}

export default Sun;
