import React from "react";

const Form = ({inputText, setInputText, todos, setTodos, setFilter}) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const submitBtnHandler = (e) => {
        e.preventDefault()      // To prevent page refreshing everytime we click the add button
        setTodos([
            ...todos, {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ])
        setInputText("")
    }

    const filterHandler = (e) => {
        setFilter(e.target.value)
    }

    return(
        <form>
            <input className="todo-input" type="text" value={inputText} onChange={inputTextHandler}/>
            <button className="todo-button" type="submit" onClick={submitBtnHandler}>
                <i className="fas fa-plus-square"/>
            </button>
            <div className="select">
                <select className="filter-todo" name="todos" onChange={filterHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    )
}

export default Form