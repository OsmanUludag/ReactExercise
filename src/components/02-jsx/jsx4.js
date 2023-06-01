import React from 'react';

const Jsx4 = () => {
    const user = {
        name: "John Doe",
        email: "john@example.com",
        occupation: "Godfather of the Developers",
        age: 10
    }

    const error = false;

    return (
        <div>
            {user.age >= 18 && <h1>The content for 18 or older</h1>}
            {user.age > 18 || <h1>The content for 17 or younger</h1>}
            {error && <p>There is an error occurred</p>}
        </div>
    )
};

export default Jsx4;