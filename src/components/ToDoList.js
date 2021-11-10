import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredData}) => {
    return (
        <div className="div-container">
            <ul className="todo-list">
                {filteredData.map((todo) => (
                    <Todo
                        todo={todo}
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        text={todo.text}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList