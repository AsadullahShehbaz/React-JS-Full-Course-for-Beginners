import { useEffect, useState ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let btnref = useRef();
  let a = useRef(0);
  useEffect(()=>{
    btnref.current.style.backgroundColor="red"
    a.current = a.current+1;
    console.log("rerendering and value of a is  ",a.current)
  })
  return (
    <>
      <div>Count : {count}</div>
      <button ref = {btnref}>Increment</button>
      <button onClick={()=>{btnref.current.style.display="none"}}>Change me</button>
    </>
  )
}

export default App
