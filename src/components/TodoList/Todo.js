import React from 'react'

export const Todo = ({ todo, removeItem, editeItem }) => {
    return (
        // 'completed' class for completed todos
        <div className='todo' style={{ display: 'flex' }}>
            <li className={`todo-item ${todo.completed && 'completed'}`}>{todo.title}</li>

            <button className="check-btn" onClick={() => editeItem(todo.id)}>
                <i className="fas fa-check" aria-hidden="true"></i>
            </button>

            <button className="trash-btn" onClick={() => removeItem(todo.id)}>
                <i className="fas fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    )
}