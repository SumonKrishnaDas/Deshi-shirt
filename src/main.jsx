import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main from './Components/Layout/Main,.jsx'
import Home from './Components/Home/Home.jsx'

import { 

  createBrowserRouter, RouterProvider




 } from"react-router-dom"
import OrderReview from './Components/OrderReview/OrderReview.jsx'
import Grandpa from './Components/Grandpa/Grandpa.jsx'


const router = createBrowserRouter([


{


path:'/',
element:<Main> </Main>,
children:[

{

path:'/home',
element:<Home>  </Home>,
loader:()=> fetch('tshirt.json')

},

{

path:'/review',
element:<OrderReview> </OrderReview>
},

{

  path:'/grandpa',
  element:<Grandpa> </Grandpa>

}

]


}






])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)
