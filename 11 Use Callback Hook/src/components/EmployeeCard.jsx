import React ,{memo}from 'react'

const EmployeeCard = (props) => {
    console.log("Employee Card Rendered")
  return (
    <div>
        <h3>Welcome {props.name}</h3>
    </div>
  )
}

export default memo(EmployeeCard)