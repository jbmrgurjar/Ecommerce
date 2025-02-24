import React from 'react'
import {Outlet} from 'react-router-dom';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar'
// import Home from './Component/Home'
import ThemeContext from './assets/ThemeContext';
const App = () => {
  return (

    <div>
      <ThemeContext>
     <Navbar></Navbar>
     <Outlet>
     </Outlet>
<Footer></Footer>
</ThemeContext>
   
    </div>
  )
}

export default App