import React from 'react';
import './App.css';
import api from "./services/api"
import Routes from "./routes"

function App() {

  api.get("/posts").then(response => {
    console.log(response.data);
  })

  api.get("/todos").then(response => {
    console.log(response.data);
  })

  api.get("/albums").then(response => {
    console.log(response.data);
  })


  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
