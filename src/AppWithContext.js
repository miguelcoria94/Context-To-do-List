import React from 'react';

class AppWithContext extends React.Component {
    constructor() {
        super();
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    }

    createTask = (task) => {

    }

    deleteTask = (id) => {

    }

    updateLocalStorageTask = () => {
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