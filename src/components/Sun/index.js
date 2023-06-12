import "./Sun.css"

// This component will be used to determine the version of the sun to render,
// determined by the currently selected planet

const Sun = ( {planet} ) => {

  
  return (
    <div className={`sun sun-${planet}`}></div>
  )
}

export default Sun;
