import "./Viewport.css"
import Sun from "../Sun"

const Viewport = () => {

  return (
    <div className="main-page-container">
      <div className="title">Solarium v0.3</div>
      <div className="creator">Made by Christo Grabowski</div>
      <Sun />
    </div>
  )
}

export default Viewport;
