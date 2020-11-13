import React from 'react';
import TodoContext from './contexts/TodoContext';
import App from './App';

class AppWithContext extends React.Component {
    constructor() {
        super();
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        this.state = {
            tasks: storedTasks || {},
            createTask: this.createTask,
            deleteTask: this.deleteTask,
        }
    }

    createTask = (task) => {
        const date = new Date();
        const nextTaskId = (date).getTime();
        const newTask = {
            [nextTaskId]: {
                id: nextTaskId,
                message: task,
            }
        }
        this.setState((state, props) => ({
            tasks: { ...state.tasks, ...newTask },
        }), () => this.updateLocalStorageTasks());
    };

    deleteTask = (id) => {

    }

    updateLocalStorageTasks = () => {
        console.log(this.state.task)
        const jsonTasks = JSON.stringify(this.state.tasks);
        localStorage.setItem("tasks", jsonTasks)
    }

    render() {
        return (

        );
    }
}

export default AppWithContext;
