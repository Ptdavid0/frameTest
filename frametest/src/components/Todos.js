import React, { useState, useEffect } from "react";
import api from "../services/api";
import "../assets/todos.css";

export default function Todos(props) {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState([]);
  const [filteredItems,setFilteredItems] = useState([]);

  useEffect(() => {
    api.get("/todos").then((response) => {
      console.log(response.data);
      setTodos(response.data);
      setAllTodos(response.data);
    });
  }, []);

  function getClass(stateOfItem) {
    if (stateOfItem) {
      return "cards_done";
    } else {
      return "cards_notDone";
    }
  }
  
   async function filterTodoItems(typeOfFilter) {
    if (typeOfFilter === "Done") {
      setFilteredItems(allTodos.filter((item) => item.completed === true));
      setTodos(filteredItems);
    }else if(typeOfFilter === "notDone"){
      setFilteredItems(allTodos.filter((item) => item.completed === false));
      setTodos(filteredItems);
    }else{
      setTodos(allTodos)
    }
  }

  return (
    <>
      <br />
      <h1>To-Do List</h1>
      <div className="btnContainer">
        <button className="cards" onClick={() => filterTodoItems("all")}>
          All
        </button>
        <button className="cards" onClick={() => filterTodoItems("notDone")}>
          Not Completed
        </button>
        <button className="cards" onClick={() => filterTodoItems("Done")}>
          Done
        </button>
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
    </>
  );
}
