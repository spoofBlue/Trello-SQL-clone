
import React from 'react';
import Detail from './detail';

// Specify an id to each task for reference.

function Task(props) {
    return (
        <div className="task">
            <h3>{props.taskName}</h3>
            <input type="button" className="remove-task-button remove-1" value="Remove Task" />
            <Detail description="Use water, not ethanol." />
            <Detail description="Please wear clothes while doing it." />
        </div>
    );
}

export default Task;