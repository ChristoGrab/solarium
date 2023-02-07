import { useParams } from 'react-router-dom'
import "./InfoCard.css"

const InfoCard = () => {
  
  const { planet } = useParams();
  
  let info;
  
  const fetchPlanet = async () => {
    const data = await fetch('https://api.le-systeme-solaire.net/rest/bodies')
    
    const response = await data.json()
    
    info = response.bodies[0]
  }
  
  fetchPlanet().then(console.log(info))
  
  
  return (
    <section className="info-card">
      <div className="infocard-title">
        {planet}
      </div>
    </section>
  )
}

export default InfoCard
