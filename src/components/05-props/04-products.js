import React from 'react';

const Products = ({ name, children }) => {
    return (
        <div>
            HEADER
            <br />
            {name}
            <br />
            {children}
            FOOTER
        </div>
    )
};

export default Products;