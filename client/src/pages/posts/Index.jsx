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
            setPosts(response.data)
            console.log('no catch... for getPost of Edit.jsx')
            console.log(baseURL)
            const yep = await axios.get(baseURL + '/api/posts', {
                headers: {
                    baseURL
                }
            })
            console.log('attempt #2:')
            console.log(yep)
        } catch(err) {
            console.log('in catch for getPost of Edit.jsx')
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