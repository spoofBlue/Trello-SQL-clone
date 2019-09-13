
// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Components
import Task from './task';
import AddForm from './add-form';

// Actions
import { resetComponents, removeTaskFromBoard, addTaskToBoard } from '../actions/index';

export class Board extends React.Component {
    constructor(props) {
        super(props);

        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(resetComponents());
    }

    removeTask(index) {
        this.props.dispatch(removeTaskFromBoard(this.props.tasks, index));
    }

    addTask(text) {
        this.props.dispatch(addTaskToBoard(this.props.tasks, text));
    }

    render() {
        const tasks = this.props.tasks.map((task) =>
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

const mapStateToProps = state => {
    console.log('state in board: ', state);
    return ({
        tasks: state.tasks
    });
}

export default connect(mapStateToProps)(Board);