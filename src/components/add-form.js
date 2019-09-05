
import React from 'react';

export default class AddForm extends React.Component {

    addItem(event) {
        event.preventDefault();
        console.log('text in AddForm: ', this.textInput.value);
        const text = this.textInput.value.trim();
        if (text !== "") {
            this.props.addItem(text);
            this.textInput.value = "";
        }
    }

    render() {
        return (
            <form>
                <input type="text" className={`add-${this.props.type}-text-input`} placeholder={`Add a ${this.props.type}...`} ref={input => this.textInput = input} />
                <input type="button" className={`add-${this.props.type}-button`} value={`Add ${this.props.type}`} onClick={event => this.addItem(event)} />
            </form>
        );
    }
}