import { useEffect, useState } from 'react'
import InfoCard from '../InfoCard'
import "./Viewport.css"

const Viewport = () => {
  
  let planet = { name: "Mercury" }

  return (
    <div className="main-page-container">
      <div className="title">Solarium v0.1</div>
      <div className="creator">Made by Christo Grabowski</div>
      <InfoCard planet={planet}/>
    </div>
  )
}

export default Viewport;
