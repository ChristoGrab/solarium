import './SystemMenu.css';
import { SystemContext } from "../../context/PlanetContext"
import { useContext, useState } from 'react'

const SystemMenu = () => {

  const { setSystemView, systemView } = useContext(SystemContext)
  const [activeView, setActiveView] = useState(systemView)


  // These buttons will change the state of the system view using the Context API
  // This will also change the active state of the buttons to show which view is active
  const viewOrbit = (e) => {
    e.preventDefault();
    setSystemView("orbit")
    setActiveView("orbit")
  }

  const viewSize = (e) => {
    e.preventDefault();
    setSystemView("size")
    setActiveView("size")
  }

  const viewDistance = (e) => {
    e.preventDefault();
    setSystemView('distance')
    setActiveView("distance")
  }

  return (
    <nav className="system-type-menu">
      <button className={`system-type-button ${activeView === 'orbit' ? 'is-active' : ''}`}
        id="orbit-button"
        onClick={viewOrbit}>Orbit</button>
      <button className={`system-type-button ${activeView === 'size' ? 'is-active' : ''}`}
        id="size-button"
        onClick={viewSize}>Size</button>
      <button className={`system-type-button ${activeView === 'distance' ? 'is-active' : ''}`}
        id="distance-button"
        onClick={viewDistance}>Distance</button>
    </nav>
  )
}

export default SystemMenu;
