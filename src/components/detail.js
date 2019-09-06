
import React from 'react';
import DeleteForm from './delete-form';

export default function Detail(props) {
    return (
        <div className="detail" index={props.index}>
            <h5>{props.detailDescription}</h5>
            <DeleteForm type="Detail" {...props} />
        </div>
    );
}

