import axios from 'axios'

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import baseURL from '../../api'

function Index({ user }) {

    const [posts, setPosts] = useState([])

    const navigate = useNavigate()

    async function getPosts() {
        try {
            console.log('v1.00')
            const response = await axios.get(baseURL + '/api/posts')
            console.log(response.data)
            console.log(response)
            setPosts(response.data)
            console.log('no catch... for getPost of Index.jsx')
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