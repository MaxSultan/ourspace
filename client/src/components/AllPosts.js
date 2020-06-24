import React, { useState, useEffect, useContext } from 'react'
import Axios from 'axios'
import Post from './Post'
import PostForm from './PostForm'
import { Button } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'

export default function AllPosts() {
    const [posts, setPosts] = useState([])
    const [toggleForm, setToggleForm] = useState(false)
    const {user} = useContext(AuthContext)

    const getPosts = () =>{
        Axios.get('/api/get_all_posts').then(res => {
            setPosts(res.data)
        }).catch(err => console.log(err))
    }

    const deletePost = (user_id, post_id) => {
        Axios
        .delete(`/api/users/${user_id}/posts/${post_id}`)
        .then(res => {
            console.log(res)
            const filteredPosts = posts.filter(p => p.id !== res.data.id)
            setPosts(filteredPosts)
        })
        .catch(err => console.log(err))
    }

    const addPost = (postObj) => {
        Axios
        .post(`/api/users/${user.id}/posts`, postObj)
        .then(res => setPosts([res.data,...posts]))
        .catch(err => console.log(err))
    }

    const renderPosts = () => {
        return posts.map(p => <Post key={p.id} {...p} deletePost={deletePost}/>)
    }

    useEffect(()=> {
        getPosts()
    },[])

    return (
        <div>
            {renderPosts()}
            <Button onClick={() => setToggleForm(!toggleForm)}>Write a Post</Button>
            {toggleForm &&  <PostForm addPost={addPost}/>}
        </div>
    )
}
