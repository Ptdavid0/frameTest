import React,{useState, useEffect} from "react"
import api from "../services/api"
import "../assets/posts.css"

export default function Posts(props) {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    api.get("/posts").then(response => {
      console.log(response.data);
      setPosts(response.data);
    })
  },[])

  return(
    <>
    <h1>Posts</h1>
    {posts.map(post =>{
      return(
        <div key={post.id} className="cards">
          <h2>{post.title}</h2>
          <h3>{post.body}</h3>
        </div>
      )
    })}
    </>
  )
}