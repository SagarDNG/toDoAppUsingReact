import React, { useState, useEffect } from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'

function ToDoList() {
    let initTodo;
    if (localStorage.getItem("Todo") === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("Todo"));
    }

    const [todos, setTodos] = useState(initTodo);

    useEffect(() => {
        localStorage.setItem("Todo", JSON.stringify(todos));
    }, [todos])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        const remainingTodos = [...todos].filter(todo => todo.id !== id);

        setTodos(remainingTodos);

        localStorage.setItem("Todo", JSON.stringify(todos));
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h2>What are your plans for Today?</h2>
            <ToDoForm onSubmit={addTodo} />
            <ToDo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />

        </div>
    )
}

export default ToDoList