
import React from 'react';
import { connect } from 'react-redux';

import { saveBoard, addMemberToBoard, nameBoard, resetComponents } from '../actions/index';

export class Panel extends React.Component {
    constructor(props) {
        super(props);

        this.renameInputPopup = this.renameInputPopup.bind(this);
        this.addMemberInputPopup = this.addMemberInputPopup.bind(this);
        this.saveBoardClick = this.saveBoardClick.bind(this);
        this.resetComponents = this.resetComponents.bind(this);
    }

    renameInputPopup() {
        console.log('rename board input popup. name= ', this.props.name);
    }

    addMemberInputPopup() {
        console.log('add member input popup.');
    }

    saveBoardClick() {
        console.log('onSaveBoardClick, boardId= ', this.props.boardId);
    }

    resetComponents() {
        console.log('reset Components');
        this.props.dispatch(resetComponents());
    }

    render() {
        return (
            <div className="panel">
                <h2>Options:</h2>
                <ul>
                    <li><button onClick={this.renameInputPopup}>Rename Board</button></li>
                    <li><button onClick={this.addMemberInputPopup}>Add new member</button></li>
                    <li><button onClick={this.saveBoardClick}>Save Board</button></li>
                    <li><button onClick={this.resetComponents}>Reset Board</button></li>

                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        boardId: state.boardId,
        name: state.name
    });
}

export default connect(mapStateToProps)(Panel);