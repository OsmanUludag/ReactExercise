import React from 'react';

const Jsx3 = () => {
    const isAdmin = true;
    const loading = false;

    return (
        <>
            {
                isAdmin
                    ? <>
                        <h2>Admin Menu</h2>
                        <ul>
                            <li>Create User</li>
                            <li>Update User</li>
                            <li>Delete User</li>
                        </ul>
                    </>
                    : loading
                        ? "Loading..."
                        : <>
                            <h2>User Menu</h2>
                            <ul>
                                <li>Profile</li>
                                <li>Logout</li>
                            </ul>
                        </>
            }
            {/* {
                loading ? "Loading..." : <div>Hello</div>
            } */}
        </>
    )
};

export default Jsx3;