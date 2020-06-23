import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Card, Button, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import EditUser from './EditUser';



const Users = (props) => {
    const [Users, setUsers] = useState([])
    const [showForm, setShowForm] = useState(false)
    
    useEffect(()=>{
        axios.get('/api/products')
        .then( res => setUsers(res.data))
        .catch( err => console.log(err))
    },[])

    const editUser = (userObj) => {
        console.log(userObj)
        // setUsers([productObj, ...Users])
    }

    const renderUsers = () => {
        if (Users.length <= 0)
          return <h2>No Users</h2>
        return Users.map( user => (
          <Card key={`user-${user.id}`}>
            <Card.Content>
              <Card.Header>Name:{ user.name }</Card.Header>
              <Card.Meta>Email: { user.email }</Card.Meta>
              <Card.Meta>Nickname:{ user.nickname }</Card.Meta>
              <Card.Header>{ user.image }</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Button as={Link} to={`/Users/${user.id}`} color='blue'>
                View
              </Button>
            </Card.Content>
          </Card>
        ))
      }

    return(
        <div>
            <h1>Users</h1>
            {/* <Button onClick={() => setShowForm(!showForm)}>Toggle Form</Button>
            {showForm && <EditUser edit={editUser}/>} */}
            <Card.Group>
                {renderUsers()}
            </Card.Group>
        </div>
    )
} 

export default Users;