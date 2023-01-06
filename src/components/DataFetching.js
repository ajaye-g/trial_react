import  React, {useState, useEffect}  from 'react'
import axios from 'axios'
function DataFetching() {
    const [post,setPost] = useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    console.log(post)
  return (
    <div>
        <ul>
            {post.map(post =>(
              
                <li key={post.id}>{post.description}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default DataFetching
