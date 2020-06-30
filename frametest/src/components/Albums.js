import React, { useState, useEffect } from "react"
import api from "../services/api"

export default function Albums(props) {

  const [albums,setAlbums] = useState([])

  useEffect(()=>{
    api.get("/albums").then(response => {
      console.log(response.data);
      setAlbums(response.data);
    })
  },[])

  return(
    <>
    <h1>Albums</h1>
    {albums.map(album =><h2>{album.title}</h2>)}
    </>
  )
}