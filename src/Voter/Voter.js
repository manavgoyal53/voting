import React from 'react';

import './Voter.css';

const person = ( props ) => {
    return (
        <div className="Voter">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;