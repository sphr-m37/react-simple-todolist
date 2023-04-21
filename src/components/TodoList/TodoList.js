import React, { useState } from 'react'
import { Todo } from './Todo'
import { Form } from '../Form'

export const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [todoTitle, setTodoTitle] = useState('')
    const [status, setStatus] = useState('all')

    const submitHandler = e => {
        e.preventDefault()
        if (todoTitle.trim()) {
            const newTodo = { id: todos.length + 1, title: todoTitle, completed: false }
            setTodos([newTodo, ...todos])
            setTodoTitle('')
        }
    }

    const removeItem = id => {
        setTodos([...todos.filter(todo => todo.id !== id)])
    }

    const editeItem = id => {
        const newTodos = [...todos]
        newTodos.forEach(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
        })
        setTodos(newTodos)
    }


    return (
        <>
            <Form setTodoTitle={setTodoTitle} submitHandler={submitHandler} setStatus={setStatus} todoTitle={todoTitle} />
            <div className="todo-container">
                <ul className="todo-list">
                    
                    {status === 'all' && todos.map(todo => {
                        return <Todo key={todo.id}
                            todo={todo} removeItem={removeItem} editeItem={editeItem} />
                    })}

                    {status === 'completed' && todos.map(todo => {
                        if (todo.completed) {
                            return <Todo key={todo.id}
                                todo={todo} removeItem={removeItem} editeItem={editeItem} />
                        }
                    })}

                    {status === 'uncompleted' && todos.map(todo => {
                        if (!todo.completed) {
                            return <Todo key={todo.id}
                                todo={todo} removeItem={removeItem} editeItem={editeItem} />
                        }

                    })}
                </ul>
            </div>
        </>
    )
}

