
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleTask } from './redux/actions';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const [showAll, setShowAll] = useState(false);

    const handleDeleteTask = (taskId, e) => {
        e.stopPropagation(); // Prevent event from bubbling up
        dispatch(deleteTask(taskId));
    };

    const handleToggleTask = (taskId) => {
        dispatch(toggleTask(taskId));
    };

    const toggleView = () => {
        setShowAll(prev => !prev);
    };

    return (
        <div>
            <List>
                {tasks.slice(0, showAll ? tasks.length : 5).map((task, index) => (
                    <ListItem key={task.id} button>
                        <ListItemText
                            primary={`${index + 1}. ${task.text}`} // Display serial number with task
                            className={task.completed ? 'completed' : ''}
                            onClick={() => handleToggleTask(task.id)} // Toggle completion when task text is clicked
                            style={{ textDecoration: task.completed ? 'line-through' : 'none' }} // Add line-through effect
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={(e) => handleDeleteTask(task.id, e)}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="complete" onClick={() => handleToggleTask(task.id)}>
                                <DoneIcon color={task.completed ? 'primary' : 'disabled'} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            {tasks.length > 5 && (
                <Button variant="contained" onClick={toggleView} fullWidth>
                    {showAll ? 'View Less' : 'View More'}
                </Button>
            )}
        </div>
    );
};

export default TaskList;
