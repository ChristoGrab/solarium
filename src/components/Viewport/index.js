import "./Viewport.css"
import Sun from "../Sun"

const Viewport = () => {

  return (
    <div className="main-page-container">
      <div className="title">Solarium v0.8</div>
      <div className="creator">Made by
        <a className="github-link" href="https://christograb.github.io" target="_blank" rel="noreferrer">Christo Grabowski</a>
      </div>
      {/* <Sun /> */}
    </div>
  )
}

export default Viewport;
