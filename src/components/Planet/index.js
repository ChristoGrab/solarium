import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Planet.css"

const Planet = ({planet}) => {
  
  console.log(planet)
  
  return (
    <>
      <div className={planet} />
    </>
  )
}

export default Planet;
