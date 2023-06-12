import './SystemMenu.css';
import { SystemContext } from "../../context/PlanetContext"
import { useContext, useEffect } from 'react'

const SystemMenu = () => {

  const { setSystemView } = useContext(SystemContext)


  // These buttons will change the state of the system view using the Context API
  const viewOrbit = (e) => {
    e.preventDefault();
    
    const orbitButton = document.getElementById("orbit-button")
    if (!orbitButton.classList.contains("is-active")) {
      orbitButton.classList.add("is-active")
    }
    
    const sizeButton = document.getElementById("size-button")
    if (sizeButton.classList.contains("is-active")) {
      sizeButton.classList.remove("is-active")
    }
    
    const distanceButton = document.getElementById("distance-button")
    if (distanceButton.classList.contains("is-active")) {
      distanceButton.classList.remove("is-active")
    }

    setSystemView("orbit")
    
  }

  const viewSize = (e) => {
    e.preventDefault();
    
    const orbitButton = document.getElementById("orbit-button")
    if (orbitButton.classList.contains("is-active")) {
      orbitButton.classList.remove("is-active")
    }
    
    const sizeButton = document.getElementById("size-button")
    if (!sizeButton.classList.contains("is-active")) {
      sizeButton.classList.add("is-active")
    }
    
    const distanceButton = document.getElementById("distance-button")
    if (distanceButton.classList.contains("is-active")) {
      distanceButton.classList.remove("is-active")
    }

    setSystemView("size")
  }

  const viewDistance = (e) => {
    e.preventDefault();
    
    const orbitButton = document.getElementById("orbit-button")
    if (orbitButton.classList.contains("is-active")) {
      orbitButton.classList.remove("is-active")
    }
    
    const sizeButton = document.getElementById("size-button")
    if (sizeButton.classList.contains("is-active")) {
      sizeButton.classList.remove("is-active")
    }
    
    const distanceButton = document.getElementById("distance-button")
    if (!distanceButton.classList.contains("is-active")) {
      distanceButton.classList.add("is-active")
    }

    setSystemView('distance')
  }

  return (
    <nav className="system-type-menu">
      <button className="system-type-button is-active"
        id="orbit-button"
        onClick={viewOrbit}>Orbit</button>
      <button className="system-type-button"
        id="size-button"
        onClick={viewSize}>Size</button>
      <button className="system-type-button"
        id="distance-button"
        onClick={viewDistance}>Distance</button>
    </nav>
  )
}

export default SystemMenu;
