import React from 'react'

export const Form = ({ setTodoTitle, todoTitle, submitHandler, setStatus }) => {
    return (
        <form onSubmit={submitHandler}>
            <input type="text" className="todo-input" maxLength="40" value={todoTitle} onChange={e => setTodoTitle(e.target.value)} />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select" onChange={(e) => setStatus(e.target.value)}>
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}
