import { useState } from 'react'
import userContext from './Context/UserContext'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Login/Login'
import Profile from './Profile/Profile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login></Login>
    <Profile></Profile>
    </>
  )
}

export default App
