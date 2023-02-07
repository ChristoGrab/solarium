import { useParams, useNavigate } from 'react-router-dom'
import "./InfoCard.css"

const InfoCard = () => {
  
  const { planet } = useParams();
  const navigate = useNavigate()
  
  const returnToMainMenu = async (e) => {
    e.preventDefault();
    console.log('hello')
    return navigate('/')
  }
  
  return (
    <section className="info-card">
      <div className="infocard-title">
        {planet}
      </div>
      <button className="infocard-back-button"
      onClick={returnToMainMenu}>Main</button>
    </section>
  )
}

export default InfoCard
