import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./styles.css";
import Header from "../../shared/header";
import Paginator from 'react-hooks-paginator';

export default function Posts(props) {

  const pageLimit = 12;
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  }, []);

  useEffect(() => {
    setCurrentPosts(posts.slice(offset, offset + pageLimit));
  }, [offset, posts]);

  return (
    <>
      <Header />
      <br/>
      <h1>Posts</h1>
      <div className="postContainer">
        {currentPosts.map((post) => {
          return (
            <div className="property-card" key={post.id}>
              <div className="property-image">
                <div className="property-image-title"></div>
              </div>
              <div className="property-description">
                <h5> {post.title} </h5>
                <p>{post.body}</p>
              </div>
            </div>
          );
        })}
        <Paginator
        totalRecords={posts.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      </div>
    </>
  );
}
