import {SystemContext} from '../../context/PlanetContext'
import Orbit from './Orbit'
import Size from './Size'
import Distance from './Distance'
import SystemMenu from './SystemMenu'
import { useContext, useEffect, useState } from 'react'

const SolarSystem = () => {

  // use the useContext hook to get the systemView state variable and the setSystemView function
  const { systemView } = useContext(SystemContext)

  const [system, setSystem] = useState("orbit")

  useEffect(() => {
    setSystem(systemView)
}, [systemView])

  // use the systemView state variable to determine which component to render
  if (system === "orbit") return (
    <>
    <Orbit />
    <SystemMenu />
    </>
  )
  
  if (system === "size") return (
    <>
    <Size />
    <SystemMenu />
    </> 
  )
  
  if (system === "distance") return (
    <>
    <Distance />
    <SystemMenu />
    </>
  )
}

export default SolarSystem
