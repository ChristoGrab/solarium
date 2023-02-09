import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { convertTemp } from '../../functions/convertTemp';
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
      onClick={returnToMainMenu}>Main</button>
      </div>
      <div className="infocard-field">
        Average Orbital Distance: {planetStats.distance} km
      </div>
      <div className="infocard-field">
        Equatorial radius: {planetStats.radius} km
      </div>
      {/* <div className="infocard-field">
        Temperature High/Low: {planetStats.temperature}/{planetStats.temperature[0]} C
      </div> */}
      <div className="infocard-field">
        Gravity: {planetStats.gravity} m/s
      </div>
      <div className="infocard-field">
        Moons: {planetStats?.moons ? (planetStats.moons.map(moon => <div>{moon}</div>)) : "None"}
      </div>
    </section>
    </>
  )
}

export default InfoCard
