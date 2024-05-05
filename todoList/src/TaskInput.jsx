

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/actions';
import { TextField, Button, Grid } from '@mui/material';

const TaskInput = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (text.trim() !== '') {
            dispatch(addTask(text));
            setText('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={9}>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Add a new task..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Button variant="contained" onClick={handleAddTask} fullWidth>
                    Add Task
                </Button>
            </Grid>
        </Grid>
    );
};

export default TaskInput;
