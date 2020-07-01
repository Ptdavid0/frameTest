import React, { useState, useEffect } from "react";
import api from "../../services/api"
import "./styles.css";
import Header from "../../shared/header";

export default function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <h1>Posts</h1>
      <div className="postContainer">
        {posts.map((post) => {
          return (
            <div class="property-card" key={post.id}>
              <div class="property-image">
                <div class="property-image-title"></div>
              </div>
              <hr/>
              <div class="property-description">
                <h5> {post.title} </h5>
                <p>{post.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
