
import React from 'react';

export default function DeleteForm(props) {
    function onClick() {
        console.log(props);
        props.removeItem(props.index);
    }

    return (
        <input type="button" className={`remove-${props.type.toLowerCase()}-button}`}
            value={`Remove ${props.type}`} placeholder={`Remove ${props.type}`} onClick={onClick} />
    )
}