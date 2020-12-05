import React from 'react';

import './Voter.css';

const voter = ( props ) => {
    return (
        <div className="Voter">
            <p>Hello! Please vote for {props.roll}</p>
            <button onClick={props.click}></button>
        </div>
    )
};

export default voter;