import { createContext, useState } from "react";

export const PlanetContext = createContext();

export default function PlanetProvider(props) {

  const [ planetData, setPlanetData] = useState(null);

  return (
    <PlanetContext.Provider
    value={{ planetData }}>
      {props.children}
    </PlanetContext.Provider>
  )
}
