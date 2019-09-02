
import React from 'react';

export default function Detail(props) {
    function onClick() {
        props.onDetailRemove(props.index);
    }

    return (
        <li index={props.index}>
            <h5>{props.description}</h5>
            <input type="button" className={`remove-detail-button`}
                value="Remove Detail" placeholder="Remove Details" onClick={onClick} />
        </li>
    );
}