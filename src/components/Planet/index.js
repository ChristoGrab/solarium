import "./Planet.css";
import Sun from '../Sun'

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
