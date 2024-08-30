import React, { useContext } from 'react'
import userContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(userContext)
    if(user) return <h1>Welcome! {user.username}</h1>
    else return <h1>Please! Login</h1>
}

export default Profile
