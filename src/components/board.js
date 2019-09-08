
import React from 'react';
//import {connect} from 'react-redux';

import Task from './task';
import AddForm from './add-form';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: ["Do the dishes du.", "Mow the lawn."]
        }

        this.removeTask = this.removeTask.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    removeTask(index) {
        console.log(`remove task at index: `, index);
        console.log(this.state);
        const newTasks = this.state.tasks.filter(task => task !== index);    //Note, this assumes we're still using the task text as the task's index.
        this.setState({ tasks: newTasks });
    }

    addTask(text) {
        this.setState({ tasks: [...this.state.tasks, text] });
    }

    render() {
        const tasks = this.state.tasks.map((task) =>
            <li key={task} >
                <Task index={task} taskDescription={task} removeItem={this.removeTask} />
            </li>
        );
        return (
            <div className="board">
                <AddForm type="Task" addItem={this.addTask} />
                <h2>My Board</h2>
                <ul>{tasks}</ul>
            </div>
        );
    }
}