import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
import Contact from './components/Contact'
import {createBrowserRouter,RouterProvider} from 'react-router'
const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element : <> <Navbar/><Home/></>
    },
    {
      path:'/about',
      element :  <><Navbar/><About/></>
    },
    {
      path:'/contact',
      element :  <><Navbar/><Contact/></>
    },
    {
      path:'/user/:username',
      element :  <><Navbar/><User/></>
    },
  ])
  return (
    <div>
     
      <RouterProvider router={router}/>
    </div>
  )
}

export default App