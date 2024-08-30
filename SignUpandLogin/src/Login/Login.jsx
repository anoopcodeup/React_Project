import React, { useContext, useState } from 'react'
import userContext from '../Context/UserContext'

function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const {user,setUser} = useContext(userContext)
    

  return (
    <div>
      <div>
      <label htmlFor="Uname">Username: </label>
      <input type="text"
        id='Uname'
        value={username}
        placeholder='Username'
        onChange={(e) => (setUsername(e.target.value))}
        />
      </div>
      <br />
      <div>
      <label htmlFor="pass">Password: </label>
      <input type="password"
        id='pass'
        value={password}
        placeholder='Password'
        onChange={(e) => (setPassword(e.target.value))}
        />
      </div>
      <div>
        <button onClick={(e) => {
            e.preventDefault()
            console.log(user)
            setUser({username,password})
            console.log(user)
        }}
        className='bg-blue-500 text-white mt-5 p-1 rounded-md'
        >
            Submit
        </button>
      </div>
    </div>
  )
}

export default Login
