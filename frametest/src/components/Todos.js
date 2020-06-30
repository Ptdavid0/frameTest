import React, { useState, useEffect } from "react";
import api from "../services/api";
import "../assets/todos.css"

export default function Todos(props) {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    api.get("/todos").then((response) => {
      console.log(response.data);
      setTodos(response.data);
    });
  },[])

  function getClass(stateOfItem) {
    if (stateOfItem){
      return "cards_done";
    }else{
      return "cards_notDone";
    }
  }

  return (
    <>
      <h1>To-Do List</h1>
      {todos.map((todo) => {
        return (
          <div key={todo.id} className={getClass(todo.completed)}>
            <h2>{todo.title}</h2>
          </div>
        )
      })}
    </>
  );
}
