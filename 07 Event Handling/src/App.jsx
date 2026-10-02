import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [form,setForm] = useState({})
  const handleClick = ()=>{
    alert("You clicked me")
  }


  const handleMouseOver = ()=>{
    alert("Hey,I am a mouse over")
  }

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    <>
      <div>
        <h1>Event Handling in React</h1>
        <button onClick={handleClick}>Click Me</button>
      </div>
    
      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am red div
      </div> */}

      <input type="text" name="name" value={form.name?form.name:""} onChange={handleChange}/>
      <input type="email" name="email" value={form.email} onChange={handleChange}/>
    </>
  )
}

export default App
