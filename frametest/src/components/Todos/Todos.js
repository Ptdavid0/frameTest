import React, { useState, useEffect } from "react";
import api from "../../services/api"
import "./styles.css";
import Paginator from 'react-hooks-paginator';
import Header from "../../shared/header";


export default function Todos(props) {


  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState([]);
  const [filteredItems,setFilteredItems] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

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
  }, [offset,allTodos]);
  
  //Input filter
  useEffect(() => {
    const results = allTodos.filter(todo =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTodos(results);
  }, [searchTerm,allTodos]);

  //Handle input Change
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  
  //Select which className will be used
  function getClass(stateOfItem) {
    if (stateOfItem) {
      return "cards_done";
    } else {
      return "cards_notDone";
    }
  }
  
  //Buttons filter
  function filterTodoItems(typeOfFilter) {
    if (typeOfFilter === "Done") {
      setFilteredItems(allTodos.filter((item) => item.completed === true));
      setTodos(filteredItems.slice(offset, offset + pageLimit));
    }else if(typeOfFilter === "notDone"){
      setFilteredItems(allTodos.filter((item) => item.completed === false));
      setTodos(filteredItems.slice(offset, offset + pageLimit));
    }else{
      setTodos(allTodos.slice(offset, offset + pageLimit));
    }
  }



  return (
    <>
      <Header />
      <br />
      <h1>To-Do List</h1>
      <div className="btnContainer">
        <button className="btn" onClick={() => filterTodoItems("all")}>
          All
        </button>
        <button className="btn" onClick={() => filterTodoItems("notDone")}>
          Not Completed
        </button>
        <button className="btn" onClick={() => filterTodoItems("Done")}>
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
