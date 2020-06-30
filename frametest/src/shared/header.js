import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/posts" className="nav-link">Posts</Link>
          </li>
          <li className="nav-item">
            <Link to="/albums" className="nav-link">Albums</Link>
          </li>
          <li className="nav-item">
            <Link to="/todos" className="nav-link">To-Do</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
