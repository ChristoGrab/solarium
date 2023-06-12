import "./Planet.css";
import Sun from '../Sun'

// This component will be used to render each planet
// The planet prop will be used to determine which planet to render

const Planet = ({planet}) => {
  
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
