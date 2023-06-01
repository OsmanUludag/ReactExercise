import React from 'react';

const Welcome2 = (props) => {
    const { firstName, lastName } = props;

    return (
        <div>
            <h2>
                Welcome {firstName} {lastName}
            </h2>
        </div>
    )
};

export default Welcome2;