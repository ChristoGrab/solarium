import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { convertTemp } from '../../functions/convertTemp';
import planetData from '../../data/planets';
import Planet from '../Planet'
import "./InfoCard.css"

const InfoCard = () => {
  
  const { planet } = useParams();
  const navigate = useNavigate();

  const returnToMainMenu = async (e) => {
    e.preventDefault();
    console.log('hello')
    return navigate('/')
  }
  
  return (
    <>
    <Planet planet={planet}/>
    <section className="info-card">
      <div className="infocard-title">
        {planetData.englishName}
        <button className="infocard-back-button"
      onClick={returnToMainMenu}>Main</button>
      </div>
      <div className="infocard-field">
        Mean radius: {planetData.meanRadius}
      </div>
      <div className="infocard-field">
        Average Temperature: {planetData.avgTemp} K / {convertTemp(planetData.avgTemp)} C
      </div>
      <div className="infocard-field">
        Gravity: {planetData.gravity} m/s
      </div>
      <div className="infocard-field">
        Mean radius: {planetData.meanRadius}
      </div>
      <div className="infocard-field">
        Aphelion: {planetData.aphelion} km
      </div>
      <div className="infocard-field">
        Perihelion: {planetData.perihelion} km
      </div>
    </section>
    </>
  )
}

export default InfoCard
