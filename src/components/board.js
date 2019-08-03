
import React from 'react';
import Task from './task';

function Board() {
    return (
        <div className="board">
            <h2>My Board</h2>
            <Task taskName="Do the dishes du." />
            <Task taskName="Mow the lawn." />
        </div>
    );
}

export default Board;