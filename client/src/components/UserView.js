import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Segment, Header, Button } from 'semantic-ui-react';

export default function ProductView(props){
    const [user, setUser] = useState({})

    useEffect(()=> {
        Axios.get(`/api/products/${props.match.params.id}`)
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    },[])
    return(
        <div>
            <Segment>
                <Header as='h1'>{user.name}</Header>
                <Header as='h3'>{user.email}</Header>
                <Header as='h6'>{user.price}</Header>
                <br/>
                <br/>
                <Button color='black' onClick={props.history.goBack}>Back</Button>
            </Segment>

        </div>
    )
}