import { createContext, useState } from "react";

import React from 'react'
 export const ThemeData=createContext();

const ThemeContext=({children})=> {
let [theme,setTheme]=useState("Light");
    
  return (
    <div>
    <ThemeData.Provider value={{theme,setTheme}}>
        {children}
    </ThemeData.Provider>
    </div>
  )
}

export default ThemeContext