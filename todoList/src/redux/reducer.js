

import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './actions';

const storedTasks = JSON.parse(localStorage.getItem('tasks'));
const initialState = {
    tasks: storedTasks || []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = { id: action.payload.id, text: action.payload.text, completed: action.payload.completed };
            const updatedTasks = [...state.tasks, newTask];
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return {
                ...state,
                tasks: updatedTasks
            };
        case DELETE_TASK:
            const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(filteredTasks));
            return {
                ...state,
                tasks: filteredTasks
            };
        case TOGGLE_TASK:
            const toggledTasks = state.tasks.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
            localStorage.setItem('tasks', JSON.stringify(toggledTasks));
            return {
                ...state,
                tasks: toggledTasks
            };
        default:
            return state;
    }
};

export default reducer;
