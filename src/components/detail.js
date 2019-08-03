
import React from 'react';

// Need to add an id number to this task.

function Detail(props) {
    return (
        <div className="detail">
            <h4>{props.description}</h4>
            <input type="button" className="remove-task-button remove-1" value="Remove Detail" />
        </div>
    );
}

export default Detail;