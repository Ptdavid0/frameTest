import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./styles.css";
import Paginator from "react-hooks-paginator";
import Header from "../../shared/header";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const pageLimit = 9;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  //API request for all to-dos
  useEffect(() => {
    api.get("/todos").then((response) => {
      setAllTodos(response.data);
    });
  }, []);

  //Slice the array for pagination
  useEffect(() => {
    setTodos(allTodos.slice(offset, offset + pageLimit));
  }, [offset, allTodos]);

  //Input filter
  useEffect(() => {
    const results = allTodos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTodos(results);
    // eslint-disable-next-line
  }, [searchTerm]);

  //Handle input Change
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  //Return the className that will be used
  function getClass(stateOfItem) {
    if (stateOfItem) {
      return "cards_done";
    } else {
      return "cards_notDone";
    }
  }

  //Buttons filter
  function filterDone() {
    setFilteredItems(allTodos.filter((item) => item.completed));
  }

  function filterNotDone() {
    setFilteredItems(allTodos.filter((item) => !item.completed));
  }

  function filterAll() {
    setFilteredItems(allTodos.slice(offset, offset + pageLimit));
    setCurrentPage(1);
  }

  useEffect(() => {
    setTodos(filteredItems);
  }, [filteredItems]);

  return (
    <>
      <Header />
      <br />
      <h1>To-Do List</h1>
      <div className="btnContainer">
        <button className="btn" onClick={filterAll}>
          All
        </button>
        <button className="btn" onClick={filterNotDone}>
          Not done
        </button>
        <button className="btn" onClick={filterDone}>
          Done
        </button>

        <input
          className="inputFilter"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <hr />
      <div className="todoContainer">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className={getClass(todo.completed)}>
              <h2>{todo.title}</h2>
            </div>
          );
        })}
      </div>
      <Paginator
        totalRecords={allTodos.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
