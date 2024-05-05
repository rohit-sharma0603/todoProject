

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK'; // Add toggle task action

export const addTask = (text) => {
    return {
        type: ADD_TASK,
        payload: {
            id: new Date().getTime(),
            text,
            completed: false // Set completed to false initially
        }
    };
};

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    };
};

export const toggleTask = (id) => {
    return {
        type: TOGGLE_TASK,
        payload: id
    };
};


