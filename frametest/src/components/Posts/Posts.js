import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./styles.css";
import Header from "../../shared/header";
import Paginator from "react-hooks-paginator";

export default function Posts() {
  const pageLimit = 3;
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  useEffect(() => {
    setCurrentPosts(posts.slice(offset, offset + pageLimit));
  }, [offset, posts]);

  return (
    <>
      <Header />
      <br />
      <h1>Posts</h1>
      <div className="postContainer">
        {currentPosts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="post-header">
                <p className="user-name">{`master_${post.userId}`}</p>
                <p className="time">{`${
                  Math.floor(Math.random() * 23) + 1
                }h`}</p>
              </div>
              <div className="post-image">
                <img
                  src="https://c.tadst.com/gfx/750w/sunrise-sunset-sun-calculator.jpg"
                  width="100%"
                  alt="Main Content"
                />
              </div>
              <div className="post-content">
                <p className="title">{post.title}</p>
                <hr />
                <p>{post.body}</p>
                <p className="hashtag">#sunset</p>
                <p className="hashtag">#nofilterneeded</p>
                <p className="hashtag">#yaNoMasHashtags</p>
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
