import React, { useState } from 'react'
import { Form, FormInput, Button } from 'semantic-ui-react'
import Axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'

export default function PostForm({ addPost }) {
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    

    const handleSubmit = () => {
       addPost({name, content})
       setName('')
       setContent('')
    }
    return (
        <Form onSubmit={() => handleSubmit()}>
            <Form.Input
            label='Post name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <Form.Input
            label='content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
            <Button>Submit</Button>
        </Form>
    )
}
