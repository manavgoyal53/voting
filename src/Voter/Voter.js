import React from 'react';

import './Voter.css';

const voter = ( props ) => {
    return (
        <div className="Voter">
            <p>Hello. I am {props.name} - {props.roll}</p>
            <button onClick={props.click}>Vote for Me.</button>
        </div>
    )
};

export default voter;