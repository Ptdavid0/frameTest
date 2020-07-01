import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./styles.css";
import Header from "../../shared/header";
import Paginator from 'react-hooks-paginator';

export default function Albums(props) {

  const [albums, setAlbums] = useState([]);

  const pageLimit = 8;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentAlbums, setCurrentAlbums] = useState([]);

  useEffect(() => {
    api.get("/albums").then((response) => {
      console.log(response.data);
      setAlbums(response.data);
    });
  }, []);

  useEffect(() => {
    setCurrentAlbums(albums.slice(offset, offset + pageLimit));
  }, [offset, albums]);

  return (
    <>
      <Header />
      <br />
      <h1>Albums</h1>
      <div class="cards-list">
        {currentAlbums.map((album) => (
          <>
            <div class="card">
              <div class="card_image">
                <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
                <div className="textDiv">
                  <p>{album.title}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <br/><br/>
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
