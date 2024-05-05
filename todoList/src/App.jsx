// App.js

import React, { useEffect } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/actions';
import { CssBaseline, Container, Typography } from '@mui/material';

const App = () => {
    const dispatch = useDispatch();

    // Load tasks from local storage when the app starts
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            storedTasks.forEach(task => {
                dispatch(addTask(task.text));
            });
        }
    }, [dispatch]);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography variant="h3" component="h1" gutterBottom>
                    React To-Do App
                </Typography>
                <TaskInput />
                <TaskList />
            </Container>
        </React.Fragment>
    );
};

export default App;
