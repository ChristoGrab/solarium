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
        <div className="crater"></div>
      </div>
    </>
  )
}

export default Planet;
