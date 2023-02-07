import { useEffect, useState } from 'react'
import "./Viewport.css"

const Viewport = () => {

  return (
    <div className="main-page-container">
      <div className="title">Welcome to Solarium</div>
      <canvas width={150} height={150}></canvas>
    </div>
  )
}

export default Viewport;
