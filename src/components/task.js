
import React from 'react';
import Detail from './detail';
import AddForm from './add-form';

// Specify an id to each task for reference.

export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: ["Use water, not ethanol", "Please wear clothes while doing it."]
        };

        this.removeDetail = this.removeDetail.bind(this);
        this.addDetail = this.addDetail.bind(this);
    }

    removeDetail(index) {
        console.log(`remove detail at index: `, index);
        console.log(this.state);
        let newDetails = this.state.details;
        newDetails.pop(index);
        this.setState({ details: newDetails });
    }

    addDetail(text) {
        console.log(`add text in Task: `, text);
        this.setState({ details: [...this.state.details, { text }] });
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
                <AddForm type="Detail" addDetail={this.addDetail} />
            </div>
        );
    }
}