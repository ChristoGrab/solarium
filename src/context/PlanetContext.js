import { createContext, useState } from "react";

export const PlanetContext = createContext();

export default function PlanetProvider(props) {

  const [ planet, setPlanet] = useState('sun');

  return (
    <PlanetContext.Provider
    value={{ planet }}>
      {props.children}
    </PlanetContext.Provider>
  )
}
