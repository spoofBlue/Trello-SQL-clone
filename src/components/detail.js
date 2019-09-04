
import React from 'react';
import DeleteForm from './delete-form';

export default function Detail(props) {
    return (
        <li index={props.index}>
            <h5>{props.description}</h5>
            <DeleteForm type="Detail" {...props} />
        </li>
    );
}

