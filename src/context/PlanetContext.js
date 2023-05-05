import { createContext, useState } from "react";

export const SystemContext = createContext();

export default function SystemProvider(props) {

  // create a state variable to hold the system view, initialized to the orbit view
  const [ systemView, setSystemView] = useState('orbit');

  return (
    <SystemContext.Provider
    value={{ systemView, setSystemView }}>
      {props.children}
    </SystemContext.Provider>
  )
}
