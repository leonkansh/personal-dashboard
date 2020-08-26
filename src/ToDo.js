import "./App.css";
import React, { useEffect, useState } from "react";
// import { render } from "@testing-library/react";

function ToDo() {
  // store the current todo is typing
  const [currentTodo, setCurrentTodo] = useState("");
  // store all the todos entered
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoList = localStorage.getItem('todoList');
    console.log(todoList); // currently todoList an object
    // parse string into JSON
    const todoData = JSON.parse(todoList);
    setTodos(todoData);
    // [] ensures that useEffect only runs once after reloading
  }, []);

  function createNewTodo(currentTodo) {
    if (todos != null) {
      // make a copy of the todos array using ellipses
      let todosArray = [...todos];
      // push a new object with the todo and boolean var isCompleted
      todosArray.push({
        todo: currentTodo,
        isCompleted: false
      });
      const todosArrayData = JSON.stringify(todosArray);
      localStorage.setItem('todoList', todosArrayData);
      // update todos array in state by using setTodos
      setTodos(todosArray);
      // if list is empty add this thing, push direct to state
    } else {
      let firstTodo = [{
        todo: currentTodo,
        isCompleted: false
      }];
      setTodos(firstTodo);
      localStorage.setItem("todoList", JSON.stringify(firstTodo));
    }
  };

  function completeTodo(index) {
    // make a copy of the todos array using ellipses
    const todosArray = [...todos];
    // set the isComplete variable opposite to what it was before it was clicked(allows to mark and unmark)
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    // update todos array in state by using setTodos
    setTodos(todosArray);
  }

  function deleteTodo(index) {
    // make a copy of the todos array using ellipses
    let todosArray = [...todos];
    // splice array to remove the todo at the index
    todosArray.splice(index, 1);
    // update todos in state by using setTodos
    setTodos(todosArray);
    // re-update new todo list in local storage
    const todosArrayData = JSON.stringify(todosArray);
    localStorage.setItem('todoList', todosArrayData);
  }
  return (
    <div>
      <input
        className="todo-input"
        value={currentTodo}
        onChange={e => {
          setCurrentTodo(e.target.value);
        }}
        onKeyPress={e => {
          if (e.key === "Enter") {
            createNewTodo(currentTodo);
            setCurrentTodo("");
          }
        }}
        placeholder="What needs to get done?"
      />

      {todos.map((todo, index) => (
        <div key={todo} className="todo">
          <div className="checkbox" onClick={() => completeTodo(index)}>
            {todo.isCompleted && <span>&#x2714;</span>}
          </div>
          {/* delete */}
          <div className="delete" onClick={() => deleteTodo(index)}>
            &#128465;
              </div>
          <div className={todo.isCompleted ? "done" : ""}>{todo.todo}</div>
        </div>
        // <p>{todo.todo}</p>
      ))}
      {todos.length > 0 && `${todos.length} items`}
    </div>
  );
};

export default ToDo;