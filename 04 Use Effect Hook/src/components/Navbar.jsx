import React,{useEffect} from 'react'

const Navbar = () => {

    useEffect(()=>{
        console.log("Component Mounted");
    
        const timer = setInterval(()=>{
          console.log("Running");
        })
        return ()=>{
          console.log("Component Unmounted");
          clearInterval(timer);
        }
      },[])
  return (
    <div>This is Navbar Component</div>
  )
}

export default Navbar