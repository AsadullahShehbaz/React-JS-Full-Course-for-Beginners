import React,{useCallback,useState} from 'react'
import EmployeeCard from './components/EmployeeCard'

const App = () => {
  const [salary,setSalary] = useState(50)

  const promoteEmployee = useCallback(()=>{
    return "Employee Promoted"
  },[])
  return (
    <div>
      <h1>Use Callback Hook in React</h1>
      <h3>Salary: {salary}</h3>
      <button onClick={()=>{setSalary(salary+10)}}>Promote Employee</button>
      <EmployeeCard name="Ayan Ahmed" promote={promoteEmployee}/>
    </div>
  )
}

export default App