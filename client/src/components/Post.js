import React from 'react'
import {Card, Icon, Button } from 'semantic-ui-react'

export default function Post(props) {
    return (
        <Card>
            <Card.Content header={props.name} />
            <Card.Content description={props.content} />
            <Card.Content extra style={{display:'flex', justifyContent:'space-around'}}>
                <Icon name='user' />
                <Button icon='trash'onClick={() => props.deletePost(props.user_id, props.id)}/>
                <Button icon='edit'/>
            </Card.Content>
        </Card>
    )
}
