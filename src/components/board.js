
// Libraries
import React from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';

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

    removeTask(index) {
        this.props.dispatch(removeTaskFromBoard(this.props.tasks, index));
    }

    addTask(text) {
        this.props.dispatch(addTaskToBoard(this.props.tasks, text));
    }

    render() {
        let tasks;
        if (this.props.tasks.length > 0) {
            tasks =
                <ul>
                    {this.props.tasks.map((task) =>
                        <li key={task} >
                            <Task index={task} taskDescription={task} removeItem={this.removeTask} />
                        </li>
                    )}
                </ul>;
        } else {
            tasks = <p>You have no tasks.</p>;
        }

        return (
            <div className="board">
                <h2>My Board</h2>
                <AddForm type="Task" addItem={this.addTask} />
                {tasks}
            </div>
        );
    }
}

Board.propTypes = {
    tasks: PropType.array,
    name: PropType.string,
    members: PropType.array
}

const mapStateToProps = state => {
    console.log('state in board: ', state);
    return ({
        name: state.name,
        tasks: state.tasks,
        members: state.members
    });
}

export default connect(mapStateToProps)(Board);