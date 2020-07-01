import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./styles.css";
import Header from "../../shared/header";
import Paginator from "react-hooks-paginator";

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const pageLimit = 6;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentAlbums, setCurrentAlbums] = useState([]);

  useEffect(() => {
    api.get("/albums").then((response) => {
      setAlbums(response.data);
    });
  }, []);

  useEffect(() => {
    setCurrentAlbums(albums.slice(offset, offset + pageLimit));
  }, [offset, albums]);

  function getRandomImage() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        return "https://media.giphy.com/media/3oz8xus1ykCFgxW2ac/giphy.gif";

      case 2:
        return "https://media.giphy.com/media/2tThqE9eYxAXryV67H/giphy.gif";

      case 3:
        return "https://media.giphy.com/media/BzMQ2m1oVvxn3el26o/giphy.gif";

      case 4:
        return "https://media.giphy.com/media/26u4jNRRHk3SVtZ5K/giphy.gif";

      case 5:
        return "https://media.giphy.com/media/5zh2l7bZhkdXdwwfSJ/giphy.gif";

      case 6:
        return "https://media.giphy.com/media/XIFn7AYHHZFsAt2cjv/giphy.gif";

      default:
        return "https://media.giphy.com/media/XIFn7AYHHZFsAt2cjv/giphy.gif";
    }
  }

  return (
    <>
      <Header />
      <br />
      <h1>Albums</h1>
      <div className="cards-list">
        {currentAlbums.map((album) => (
          <React.Fragment key={album.id}>
            <div className="card">
              <div className="card_image">
                <img src={getRandomImage()} alt="Album" />
                <div className="textDiv">
                  <p>{album.title}</p>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <br />
      <br />
      <Paginator
        totalRecords={albums.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
