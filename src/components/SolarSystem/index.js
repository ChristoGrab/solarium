import {SystemContext} from '../../context/PlanetContext'
import Orbit from './Orbit'
import Size from './Size'
import Distance from './Distance'
import SystemMenu from './SystemMenu'
import { useContext, useEffect, useState } from 'react'

const SolarSystem = () => {

  // use the useContext hook to get the systemView state variable and the setSystemView function
  const { systemType } = useContext(SystemContext)
  
  const [systemView, setSystemView] = useState("orbit")
  
  useEffect(() => {
    setSystemView(systemType)
}, [systemView])
  
  // use the systemView state variable to determine which component to render
  if (systemView === "orbit") return (
    <>
    <Orbit />
    <SystemMenu />
    </>
  )
  
  if (systemView === "size") return (
    <>
    <Size />
    <SystemMenu />
    </> 
  )
  
  if (systemView === "distance") return (
    <>
    <Distance />
    <SystemMenu />
    </>
  )
}

export default SolarSystem
