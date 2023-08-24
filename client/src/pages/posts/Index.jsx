import axios from 'axios'

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import baseURL from '../../api'

function Index({ user }) {

    const [posts, setPosts] = useState([])

    const navigate = useNavigate()

    async function getPosts() {
        try {
            const response = await axios.get('/api/posts', {
                headers: {
                    baseURL
                }
            })
            console.log(response.data)
            console.log(response)
            setPosts(response.data)
            console.log('no catch... for getPost of Index.jsx')
            console.log(baseURL)
            console.log('attempt 2')
            let test = await axios.get(baseURL + '/api/posts')
            console.log(test)
            console.log('attempt 3')
            let test2 = await axios.get('https://blog-backend-3ztu.onrender.com/api/posts')
            console.log(test2)
            console.log('attempt 4')
            let test3 = await axios.get('http://blog-backend-3ztu.onrender.com/api/posts')
            console.log(test3)
        } catch(err) {
            console.log('in catch for getPost of Index.jsx')
            console.log(err)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
            <>
                <h1>Index View</h1>
                <div id="posts">

                        {posts.map((post, index) => 
                            <div className="a-post" key={index}>
                                <a href={`/posts/${post._id}`}>{post.subject}</a>
                            </div>
                        )}
            
             
                    {user && 
                        <button onClick={() => navigate('/posts/new')}>NEW POST</button>
                    }
               
                </div>
            </>
    )
}

export default Index