import React, { useState, useEffect, useRef } from 'react'

function ToDoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

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
            {props.edit ?
                (
                    <>
                        <input
                            type='text'
                            placeholder='Update your To-Do'
                            value={input}
                            name='text'
                            className='ToDoInput edit'
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button onClick={handleSubmit} className='ToDoButton edit'>
                            Update ToDo
                        </button>
                    </>
                ) :
                (
                    <>
                        <input
                            type='text'
                            placeholder='Add a To-Do'
                            value={input}
                            name='text'
                            className='ToDoInput'
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button onClick={handleSubmit} className='ToDoButton'>
                            Add ToDo
                        </button>
                    </>
                )
            }

        </form>
    )
}

export default ToDoForm;