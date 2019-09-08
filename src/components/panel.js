
import React from 'react';

function Panel() {
    return (
        <div className="panel">
            <h2>Options:</h2>
            <ul>
                <li><button>Rename Board</button></li>
                <li><button>Add new member</button></li>
                <li><button>Save Board</button></li>
                <li><button>Reset Board</button></li>
            </ul>
        </div>
    )
}

export default Panel;