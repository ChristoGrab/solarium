import {SystemContext} from '../../context/PlanetContext'
import Orbit from './Orbit'
import Size from './Size'
import Distance from './Distance'
import SystemMenu from './SystemMenu'
import { useContext, useEffect, useState } from 'react'

const SolarSystem = () => {

  const { systemView } = useContext(SystemContext)
  
  const [systemType, setSystemType] = useState("orbit")
  
  useEffect(() => {
    setSystemType(systemView)
    console.log(systemView)
}, [systemView])
  
  if (systemType === "orbit") return (
    <>
    <Orbit />
    <SystemMenu />
    </>
  )
  
  if (systemType === "size") return (
    <>
    <Size />
    <SystemMenu />
    </> 
  )
  
  if (systemType === "distance") return (
    <>
    <Distance />
    <SystemMenu />
    </>
  )
}

export default SolarSystem
