import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Planet = () => {
  
  const { planet } = useParams()
  
  const [planetImage, setPlanetImage] = useState('')
  
  console.log(planet)

  useEffect(() => {
    
    console.log(planet)
    
    if (planet == "mercury") {
      setPlanetImage(<div className="mercury" />)
    } else {
      setPlanetImage(<div className="venus" />)
    }
  
}, [planet])
  
  return (
    <>
      {planetImage}
    </>
  )
}

export default Planet;
