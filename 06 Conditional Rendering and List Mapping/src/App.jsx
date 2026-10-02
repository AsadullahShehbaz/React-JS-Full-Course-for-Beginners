import React,{useState} from 'react'

const TaskCard = ({task})=>{
  return (
<div  style={{border:"2px solid red"}}>
            <h3>{task.title}</h3>
            <p>{task.desc}</p>
            </div>
  )
}
const App = () => {

  const [tasks,setTask]= useState([
    {
      title: "Task1",
      desc:"Task 1 description"
    },
    {
      title: "Task2",
      desc:"Task 2 description"
    },
    {
      title: "Task3",
      desc:"Task 3 description"
    },
    {
      title: "Task4",
      desc:"Task 4 description"
    }
  ])
  return (
    <div>

      {tasks.map((taskitem)=>{
        return (
          <TaskCard key={taskitem.title} task={taskitem}/>
        )
      })}
    </div>
  )
}

export default App