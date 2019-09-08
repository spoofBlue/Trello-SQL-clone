
import React from 'react';
import Detail from './detail';
import AddForm from './add-form';
import DeleteForm from './delete-form';

// Specify an id to each task for reference.

export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: ["Use water, not ethanol", "Please wear clothes while doing it."],
        };

        this.removeDetail = this.removeDetail.bind(this);
        this.addDetail = this.addDetail.bind(this);
    }

    removeDetail(index) {
        console.log(`remove detail at index: `, index);
        console.log(this.state);
        const newDetails = this.state.details.filter(detail => detail !== index);    //Note, this assumes we're still using the detail text as the detail's index.
        this.setState({ details: newDetails });
    }

    addDetail(text) {
        console.log(`add text in Task: `, text);
        this.setState({ details: [...this.state.details, text] });
    }

    render() {
        // If editing <Detail>'s index, see removeDetail function above on how to filter out the removed detail.
        const details = this.state.details.map((detail) =>
            <li key={detail}>
                <Detail index={detail} detailDescription={detail} removeItem={this.removeDetail} />
            </li>
        );

        return (
            <div className="task" index={this.props.index}>
                <h3>{this.props.taskDescription}</h3>
                <DeleteForm type="Task" {...this.props} />
                <h4>Details</h4>
                <ul>{details}</ul>
                <AddForm type="Detail" addItem={this.addDetail} />
            </div>
        );
    }
}