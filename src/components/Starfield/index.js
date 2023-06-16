import { useEffect, useRef } from 'react';
import "./Starfield.css"

const COLOR_SPACE = "black";
const COLOR_STARS = "white";

const STAR_COUNT = 200; // number of stars in the starfield
const STAR_SIZE = 0.003; // maximum star size as a fraction of screen width
const STAR_SPEED = 0.01; // fraction of screen width per second

const Starfield = () => {
  
  // Create a reference to the canvas
  const canvasRef = useRef(null);

  useEffect(() => {
    
    // Get the canvas element and apply a 2d context
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    
    // Set the canvas dimensions to match the window dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Each star will be created and added to an array
    let stars = [];
    // The speed of the stars will be a fraction of the screen width per second
    let starSpeed = STAR_SPEED * canvas.width;
    
    // The x velocity will be randomly calculated, and chosen to be either positive or negative
    let xVelocity = starSpeed * randomDirection() * Math.random();
    // Use Pythagoras' theorem to calculate the y velocity
    let yVelocity = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(xVelocity, 2)) * randomDirection();
    
    // Each star will be created with a random radius, x and y coordinate, and velocity
    for (let i = 0; i < STAR_COUNT; i++) {
      
      let starX, starY;
      let isOverlapping;
      
      do {
        starX = Math.floor(Math.random() * canvas.width);
        starY = Math.floor(Math.random() * canvas.height);
        
        isOverlapping = stars.some((star) => {
          const dx = starX - star.x;
          const dy = starY - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance < (star.radius + STAR_SIZE * canvas.width);
        })
      } while (isOverlapping);
      
      let speedMultiplier = Math.random() * 1.5 + 0.5;
      
      let scaleMultiplier = Math.random() * 0.5 + 0.5;
      
      stars[i] = {
        radius: Math.random() * STAR_SIZE * canvas.width / 2, // Radius of star
        x: Math.floor(Math.random() * canvas.width), // x-coordinate of star
        y: Math.floor(Math.random() * canvas.height), // y-coordinate of star
        xv: xVelocity * speedMultiplier * scaleMultiplier,
        yv: yVelocity * speedMultiplier * scaleMultiplier,
        scaleMultiplier
      }
    }
    
    
    let timeDelta, timeLast = 0;
    requestAnimationFrame(loop)
    
    function loop(timeNow) {
      timeDelta = timeNow - timeLast;
      timeLast = timeNow;
      
      // draw space
      context.fillStyle = COLOR_SPACE;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      console.log(canvas.width, canvas.height);
      
      // Draw the stars
      context.fillStyle = COLOR_STARS;
      
      for (let i = 0; i < STAR_COUNT; i++) {
        context.beginPath();
        context.arc(stars[i].x, stars[i].y, stars[i].radius, 0, 2 * Math.PI);
        context.fill();
        
        // update the x position
        stars[i].x += stars[i].xv * timeDelta * 0.001;
        
        // reposition the star to the other side if it goes off screen
        if (stars[i].x < 0 - stars[i].radius * stars[i].scaleMultiplier) {
          stars[i].x = canvas.width + stars[i].radius * stars[i].scaleMultiplier;
        } else if (stars[i].x > canvas.width + stars[i].radius * stars[i].scaleMultiplier) {
          stars[i].x = 0 - stars[i].radius * stars[i].scaleMultiplier;
        }
        
        // update the y position
        stars[i].y += stars[i].yv * timeDelta * 0.001;
        
        if (stars[i].y < 0 - stars[i].radius * stars[i].scaleMultiplier) {
          stars[i].y = canvas.height + stars[i].radius * stars[i].scaleMultiplier;
        } else if (stars[i].y > canvas.height + stars[i].radius * stars[i].scaleMultiplier) {
          stars[i].y = 0 - stars[i].radius * stars[i].scaleMultiplier;
        }
      }
      
      requestAnimationFrame(loop)
      
      
    }
    
    // This function will randomly return 1 or -1 with a 50% chance for either
    function randomDirection() {
      return Math.random() >= 0.5 ? 1 : -1;
    }
  }, [])

  
  return (
    <canvas className="starfield" ref={canvasRef}></canvas>
  )
}

export default Starfield;
