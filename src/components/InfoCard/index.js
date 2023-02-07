import "./InfoCard.css"

const InfoCard = ( {planet} ) => {
  
  return (
    <section className="info-card">
      <div className="infocard-title">
        {planet.name}
      </div>
    </section>
  )
}

export default InfoCard
