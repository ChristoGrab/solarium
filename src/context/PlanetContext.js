import { createContext, useState } from "react";

export const SystemContext = createContext();

export default function SystemProvider(props) {

  const [ systemView, setSystemView] = useState('orbit');

  return (
    <SystemContext.Provider
    value={{ systemView, setSystemView }}>
      {props.children}
    </SystemContext.Provider>
  )
}
