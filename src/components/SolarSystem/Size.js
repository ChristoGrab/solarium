import "./Size.css"
import { useState } from "react";
import planetData from "../../data/planets";

const Size = () => {

  const [selectedPlanet, setSelectedPlanet] = useState(null)
  const [isHovered, setIsHovered] = useState(false)

  // When the user hovers over a planet, the planet's name is set to the selectedPlanet state
  // and the isHovered state is set to true. This will trigger the info card to display.
  const handleMouseEnter = (planet) => {
    setSelectedPlanet(planet)
    setIsHovered(true)
  }

  // When the user's mouse leaves the planet, the selectedPlanet state is set to null
  // This will trigger the info card to hide.
  const handleMouseLeave = () => {
    setSelectedPlanet(null)
    setIsHovered(false)
  }


  return (
    <main className="size-system">
      <div className="sun-size" />
      <div
        className={`mercury-size ${selectedPlanet === 'mercury' ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter("mercury")}
        onMouseLeave={handleMouseLeave}
      />
      <div
        className={`venus-size ${selectedPlanet === 'venus' ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter("venus")}
        onMouseLeave={handleMouseLeave}
      />
      <div
        className={`earth-size ${selectedPlanet === 'earth' ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter("earth")}
        onMouseLeave={handleMouseLeave}
      />
      <div
        className={`mars-size ${selectedPlanet === 'mars' ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter("mars")}
        onMouseLeave={handleMouseLeave}
      />
      <div
        className={`jupiter-size ${selectedPlanet === 'jupiter' ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter("jupiter")}
        onMouseLeave={handleMouseLeave}
      />
      <div
        className={`saturn-size ${selectedPlanet === 'saturn' ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter("saturn")}
        onMouseLeave={handleMouseLeave}
      />
      <div
        className={`uranus-size ${selectedPlanet === 'uranus' ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter("uranus")}
        onMouseLeave={handleMouseLeave}
      />
      <div
        className={`neptune-size ${selectedPlanet === 'neptune' ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter("neptune")}
        onMouseLeave={handleMouseLeave}
      />
      {isHovered && <section className="name-tag">
        <div>{selectedPlanet}</div>
        <div>Diameter : {planetData[selectedPlanet]?.radius * 2} km</div>
      </section>}
    </main>
  )
}

export default Size;
