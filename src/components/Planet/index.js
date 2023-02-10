import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Planet.css";
import Sun from '../Sun'

const Planet = ({planet}) => {
  
  console.log(planet)
  
  return (
    <>
      <Sun planet={planet} />
      <div className={planet}>
        <div className={`${planet}-clouds`} />
        <div className={`${planet}-rings`} />
      </div>
    </>
  )
}

export default Planet;
