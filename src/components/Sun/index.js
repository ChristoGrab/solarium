import "./Sun.css"

const Sun = ( {planet} ) => {
  
  return (
    <div className={`sun sun-${planet}`}></div>
  )
}

export default Sun;
