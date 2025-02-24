import React, { useContext } from 'react'
import { ThemeData } from '../assets/ThemeContext'

const AboutUs = () => {
  let {theme}=useContext(ThemeData)
let light="h-full w-full"
let dark="h-full w-full bg-black text-white"
  return (
    <div className={theme=="Light"?light:dark}>
      <div className='text-center w-full h-full px-10 py-24'>
 
      </div>
    </div>
  )
}

export default AboutUs