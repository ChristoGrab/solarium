import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import "./Navbar.css"

const Navigation = () => {
  
  // const [showMenu, setShowMenu] = useState(true)
  
  // const toggleMenu = (e) => {
  //   e.preventDefault();
    
  //   const navbar = document.querySelector(".navbar-container")
    
  // }

  return (
    <nav className="navbar-container">
      {/* <button onClick={toggleMenu}>X</button> */}
      <NavLink to="/mercury" className="planet-selector">Mercury</NavLink>
      <NavLink to="/venus" className="planet-selector">Venus</NavLink>
      <NavLink to="/earth" className="planet-selector">Earth</NavLink>
      <NavLink to="/mars" className="planet-selector">Mars</NavLink>
      <NavLink to="/jupiter" className="planet-selector">Jupiter</NavLink>
      <NavLink to="/saturn" className="planet-selector">Saturn</NavLink>
      <NavLink to="/uranus" className="planet-selector">Uranus</NavLink>
      <NavLink to="/neptune" className="planet-selector">Neptune</NavLink>
    </nav>
  )
  
}

export default Navigation;
