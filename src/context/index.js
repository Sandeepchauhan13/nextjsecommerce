// in next js 13 onwards every component is a server component by default in this particular project we are using the client component for this what we need to do use client at the top of the each component 
'use client'


import {createContext} from "react";



export const GlobalContext = createContext(null);
// global context store all the state  values  that we are going to consume from each and individual   components values using usestate hooks 

export default function GlobalState({children}){
    return (
    <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
    )
    
}