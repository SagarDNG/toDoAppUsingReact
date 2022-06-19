import React, { useState } from 'react'

function ToDoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 50000),
            text: input
        });

        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='ToDoForm'>
            <input
                type='text'
                placeholder='Add a To-Do'
                value={input}
                name='text'
                className='ToDoInput'
                onChange={handleChange}
            />
            <button onClick={handleSubmit} className='ToDoButton'>
                Add todo
            </button>
        </form>
    )
}

export default ToDoForm;