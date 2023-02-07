import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navigation = () => {

  return (
    <nav className="navbar-container">
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
