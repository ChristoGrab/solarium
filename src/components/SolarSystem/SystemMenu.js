import './SystemMenu.css';
import { SystemContext } from "../../context/PlanetContext"
import { useContext } from 'react'

const SystemMenu = () => {
  
  const { setSystemView } = useContext(SystemContext)
  
  const viewOrbit = (e) => {
    e.preventDefault();

    setSystemView("orbit")
  }
  
  const viewSize = (e) => {
    e.preventDefault();
    
    setSystemView("size")
  }
  
  const viewDistance = (e) => {
    e.preventDefault();
    
    setSystemView('distance')
  }
  
  return (
    <div className="system-type-menu">
    <button className="system-type-button"
    onClick={viewOrbit}>Orbit</button>
    <button className="system-type-button"
    onClick={viewSize}>Size</button>
    <button className="system-type-button"
    onClick={viewDistance}>Distance</button>
    </div>
  )
}

export default SystemMenu;
