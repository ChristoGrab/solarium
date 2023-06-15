import { useEffect, useRef } from 'react';
import "./Starfield.css"

const COLOR_SPACE = "black";
const COLOR_STARS = "white";

const STAR_COUNT = 200; // number of stars in the starfield
const STAR_SIZE = 0.005; // maximum star size as a fraction of screen width
const STAR_SPEED = 0.05; // fraction of screen width per second

const Starfield = () => {
  
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    
    let timeDelta, timeLast = 0;
    requestAnimationFrame(loop)
    
    function loop(timeNow) {
      timeDelta = timeNow - timeLast;
      timeLast = timeNow;
      
      context.fillStyle = COLOR_SPACE;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      requestAnimationFrame(loop)
      
      
    }
  }, [])

  
  return (
    <canvas className="starfield" ref={canvasRef}></canvas>
  )
}

export default Starfield;
