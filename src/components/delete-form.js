
import React from 'react';

export default function DeleteForm(props) {
    function onClick() {
        console.log('in deleteForm. props=', props);
        const index = props.index;
        props.removeItem(index);
    }

    return (
        <input type="button" className={`remove-${props.type.toLowerCase()}-button}`}
            value={`Remove ${props.type}`} placeholder={`Remove ${props.type}`} onClick={onClick} />
    )
}