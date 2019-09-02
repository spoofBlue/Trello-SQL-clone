
import React from 'react';
import Detail from './detail';

// Specify an id to each task for reference.

export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: ["Use water, not ethanol", "Please wear clothes while doing it."]
        };
    }

    removeDetail(index) {
        console.log(index);
        let newDetails = this.state.details;
        newDetails.pop(index);
        this.setState({ details: newDetails });
    }

    addDetail(text) {
        console.log(text);
        this.setState({ details: [...this.state.details, { text }] })
    }

    render() {
        const details = this.state.details.map((detail, index) =>
            <Detail index={index} description={detail} onDetailRemove={this.removeDetail} />
        );
        return (
            <div className="task" >
                <h3>{this.props.taskName}</h3>
                <input type="button" className="remove-task-button" value="Remove Task" />
                <h4>Details</h4>
                <ul>{details}</ul>
                {/*
                <Detail description="Use water, not ethanol." detailId="task-1-detail-1" onDetailRemove={this.removeDetail} />
                <Detail description="Please wear clothes while doing it." detailId="task-1-detail-2" onDetailRemove={id => this.removeDetail(id)} />
                */}
                <input type="text" className="add-detail-text-input" placeholder="Add a detail..." />
                <input type="button" className="add-detail-button" value="Add detail" />
            </div>
        );
    }
}