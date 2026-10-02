import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
const App = () => {
  return (
   <>
   <div className="container">
    <Navbar/>
    <div className="cards">
      <Card title={'card 1'} desc = {'description of card 1'}/>
      <Card title={'card 2'} desc = {'description of card 2'}/>
      <Card title={'card 3'} desc = {'description of card 3'}/>
      <Card title={'card 4'} desc = {'description of card 4'}/>
     
    </div>
    <Footer/>
   </div>
  
   </>
  )
}

export default App