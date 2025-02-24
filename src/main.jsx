import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from './Component/ErrorPage.jsx'
import Home from './Component/Home.jsx'
import Productinfo from './Component/ProjectInfo.jsx'
import Food from './Component/Food.jsx'
import FoodCardinfo from './Component/FoodCardinfo.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './Component/Cart.jsx'

import AboutUs from './Component/AboutUs.jsx'
import { lazy,Suspense } from 'react'
import SimmerUIProjectinfo from './Component/SimmerUIProjectinfo.jsx'
import { Provider } from 'react-redux'
import appStore from './utility/Store/store.js'
const FoodApp=lazy(()=>import('./Component/Food.jsx'))
let appRouter = createBrowserRouter([
  {
    path: "/", element: <App></App>, children: [{
      path: "/", element: <Home></Home>
    }, {
      path: "/About", element: <AboutUs></AboutUs>
    }, {
      path: "/Cart", element: <Cart></Cart>
    },{
      path:"/productInfo/:id",
      element:<Productinfo></Productinfo>
    },{
      path: "/food",
      element:(<Suspense fallback={<SimmerUIProjectinfo></SimmerUIProjectinfo>}>
        <Food></Food>
      </Suspense>)
    },{
      path:"/FoodCardinfo/:id",
      element:<FoodCardinfo></FoodCardinfo>
    },
    ],errorElement:<ErrorPage></ErrorPage>
    
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={appStore}>

<RouterProvider router={appRouter}></RouterProvider>

</Provider>

)