import { useParams } from 'react-router-dom'
import "./InfoCard.css"

const InfoCard = ( {planet} ) => {
  
  let planetInfo;
  
  const currentPlanet = async () => {
    const data = await fetch("/https://api.le-systeme-solaire.net/rest/bodies/lune")
    
    planetInfo = data
  }
  
  currentPlanet()
  
  return (
    <section className="info-card">
      <div className="infocard-title">
        {planetInfo}
      </div>
    </section>
  )
}

export default InfoCard
