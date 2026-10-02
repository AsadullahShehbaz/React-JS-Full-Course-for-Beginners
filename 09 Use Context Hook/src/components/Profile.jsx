import React,{ useContext } from 'react'
import UserContext from '../context/context'

const Profile = () => {
    const {name,email} = useContext(UserContext)
  return (
    <div>
        {/* <h1>Profile Component</h1> */}
        <div>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
        </div>
    </div>
  )
}

export default Profile