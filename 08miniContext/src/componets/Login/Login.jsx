// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'

function Login() {
     const [userName, setUserName] = useState('')
     const [password, setPassword] = useState('')

     const {setUser} = useContext(UserContext)

     const handleOnClick = (e) => {
          e.preventDefault()
          setUser({userName,password})
     }

  return (
     <div>
            <h2>Login</h2>
            <input type="text" value={userName}
                 
               onChange={(e)=> setUserName(e.target.value)}
                 placeholder='Username' />
            <input type="text"
                 value={password} onChange={(e)=>setPassword(e.target.value)}
                 placeholder='password' />
            <button onClick={handleOnClick}>Submit</button>
    </div>
  )
}

export default Login