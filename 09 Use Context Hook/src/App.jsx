import React from 'react'
import Dashboard from './components/Dashboard'
import UserContext from './context/context'
import './App.css'
const App = () => {
  const user = {
    name:"Asadullah",
    email : "asadullahcreative@gmail.com"
  }
  return (
    <UserContext.Provider value={user}>
       <div>
      {/* <h1>App Component</h1> */}
      <Dashboard />
    </div>
    </UserContext.Provider>
  )
}

export default App