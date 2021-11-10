import './App.css';
import Form from "./components/Form";
import TodoList from "./components/ToDoList";
import {useEffect, useState} from "react";

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("all")
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {         // Executes once when the app starts
      loadTodos()
  }, [])

  useEffect(() => {         // Gets executed only when there is a change in todos or filter
      filterHandler()
      saveTodos()
  }, [todos, filter])

  const filterHandler = () => {
      switch (filter) {
          case "completed":
              setFilteredData(todos.filter(todo => todo.completed === true))
              break
          case "incomplete":
              setFilteredData(todos.filter(todo => todo.completed === false))
              break
          default:
              setFilteredData(todos)
              break
      }
  }

  const saveTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos))
  }

  const loadTodos = () => {
      if (localStorage.getItem("todos") === null) {
          localStorage.setItem("todos", JSON.stringify([]))
      } else {
          let localTodo = JSON.parse(localStorage.getItem("todos"))
          setTodos(localTodo)
      }
  }

  return (
    <div className="App">
        <header>
            <h1>To-Do List</h1>
        </header>
        <Form
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
            setFilter={setFilter}
        />
        <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredData={filteredData}
        />
    </div>
  );
}

export default App;
