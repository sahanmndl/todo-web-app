import React from "react";

const Todo = ({text, todos, setTodos, todo}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((e) => e.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((e) => {
            if(e.id === todo.id) {
                return {
                    ...e,
                    completed: !e.completed,
                }
            }
            return e
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo