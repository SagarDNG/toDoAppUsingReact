import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';

const ToDo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'ToDoRow complete' : 'ToDoRow'}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <AiFillCloseCircle
                    onClick={() => removeTodo(todo.id)}
                    className='deleteIcon'
                />
                <FaEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='editIcon'
                />
            </div>
        </div>
    ));
};

export default ToDo;