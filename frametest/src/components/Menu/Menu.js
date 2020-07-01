import React from "react";
import "./styles.css";
import { FaNewspaper, FaList, FaImages } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/framework-icon-150x150.png";

export default function Menu(props) {
  return (
    <>
      <div className="menuContainer">
        <div className="upperDiv">
          <img src={Logo} alt="" />
          <p>Framebook</p>
        </div>
        <div className="btnContainer">
          <Link to="/posts" className="divMenu">
            <FaNewspaper size="10vh" color="black" />
            <h2>POSTS</h2>
          </Link>

          <Link to="/albums" className="divMenu">
            <FaImages size="10vh" color="black" />
            <h2>ALBUMS</h2>
          </Link>

          <Link to="/todos" className="divMenu">
            <FaList size="10vh" color="black" />
            <h2>TO-DO LIST</h2>
          </Link>
        </div>
      </div>
    </>
  );
}
