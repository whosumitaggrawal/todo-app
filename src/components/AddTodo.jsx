import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import { TextField, Button } from '@mui/material';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <form onSubmit={addTodoHandler} style={{ marginTop: '12px' }}>
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ marginBottom: '12px' }}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                Add Todo
            </Button>
        </form>
    );
}

export default AddTodo;
