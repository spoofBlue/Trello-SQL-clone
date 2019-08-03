
import React from 'react';

function Panel() {
    return (
        <div className="panel">
            <h2>Options:</h2>
            <input type="button" className="create-new-task" value="Create Task" />
            <input type="text" className="new-task-text" placeholder="Describe new task to add here..." />
        </div>
    )
}

export default Panel;