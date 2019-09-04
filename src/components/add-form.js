
import React from 'react';

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
    }

    addDetail() {
        console.log('text in AddForm: ', this.textInput.value);
        this.props.addDetail(this.textInput.value);
    }

    render() {
        return (
            <form>
                <input type="text" className={`add-${this.props.type}-text-input`} placeholder={`Add a ${this.props.type}...`} ref={input => (this.textInput = input)} />
                <input type="button" className={`add-${this.props.type}-button`} value={`Add ${this.props.type}`} onClick={event => this.addDetail()} />
            </form>
        );
    }
}