import React from "react";
import "./App.css";
import Routes from "./routes";
import Header from "./shared/header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
