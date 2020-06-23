import React, { useState, useEffect, useContext} from 'react'
import Axios from 'axios'
import { AuthContext } from '../providers/AuthProvider'
import { Image, Button } from 'semantic-ui-react'
import EditUser from './EditUser'

export default function Profile() {
    const {user} = useContext(AuthContext) 
    const [showForm, setShowForm] = useState(false)
    
    // async function getuser(){
    //     const res = await Axios.get('/profile')
    //     console.log(res)
    // }

    // useEffect(() => {
    //   getuser()
    // },[])


    return (
        <div>
            <h1>Your Profile</h1>
           <h3> {user.name}{user.nickname}</h3>
            <p>{user.email}</p>
            <Image>{user.image}</Image>
            {console.log(user)}
            <Button onClick={() => setShowForm(!showForm)}>Toggle Form</Button>
            {showForm && <EditUser />}
        </div>
    )
}
