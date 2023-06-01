import React from 'react';

const Stats = (props) => {
    return (
        <div>
            <h2>{props.stat}</h2>
            <span>{props.title}</span>
        </div>
    )
};

export default Stats;