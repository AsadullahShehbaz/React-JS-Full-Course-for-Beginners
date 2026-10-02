import React from 'react'
import { useParams } from 'react-router'
const User = () => {
    const params = useParams()
  return (
    <div>
        <h1>Welcome Dear {params.username} to Asadullah AI</h1>
    </div>
  )
}

export default User