import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Planet from '../Planet'
import InfoCard from '../InfoCard'
import "./Viewport.css"

const Viewport = () => {

  return (
    <div className="main-page-container">
      <div className="title">Solarium v0.1</div>
      <div className="creator">Made by Christo Grabowski</div>
      <Planet />
    </div>
  )
}

export default Viewport;
