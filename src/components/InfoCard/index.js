import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { convertKmToAU } from '../../functions/convertKmToAU';
import planetData from '../../data/planets';
import Planet from '../Planet'
import "./InfoCard.css"

const InfoCard = () => {
  
  const { planet } = useParams();
  const navigate = useNavigate();
  const [planetStats, setPlanetStats] = useState("")

  const returnToMainMenu = async (e) => {
    e.preventDefault();
    console.log('hello')
    return navigate('/')
  }

  useEffect(() => {
    let currentPlanet = planetData[planet]
    setPlanetStats(currentPlanet)
  }, [planet])
  
  return (
    <>
    <Planet planet={planet}/>
    <section className="info-card">
      <div className="infocard-title">
        {planetStats.name}
        <button className="infocard-back-button"
      onClick={returnToMainMenu}>System View</button>
      </div>
      <div className="infocard-field">
        <span className="bold">Average Orbital Distance:</span> {convertKmToAU(planetStats.distance)} AU
      </div>
      <div className="infocard-field">
      <span className="bold">Equatorial radius:</span> {planetStats.radius} km
      </div>
      <div className="infocard-field">
        <span className="bold">Mean Temperature:</span> {planetStats.meanTemp} ºC
      </div>
      <div className="infocard-field">
      <span className="bold">Gravity:</span> {planetStats.gravity} m/s
      </div>
      <div className="infocard-field">
      <span className="bold">Moons:</span> {planetStats.moons}
      </div>
      <div className="infocard-fact">
        {planetStats.funFact}
      </div>
    </section>
    </>
  )
}

export default InfoCard
