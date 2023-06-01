import React from 'react';
import Welcome1 from './01-welcome';
import Welcome2 from './02-welcome';
import Welcome3 from './03-welcome';
import Products from './04-products';

const Greetings = () => {
    return (
        <div>
            <h1>Greetings Components</h1>
            <Welcome1
                firstName="John"
                lastName="Doe"
            />
            <Welcome2
                firstName="Halil"
                lastName="Techpro"
            />
            <Welcome3
                firstName="Omer"
                lastName="Isik"
            />

            <Products name="Sara" />

            <Products name="Jason">
                HELLO WORLD
                <br />
                <Welcome3
                    firstName="Omer"
                    lastName="Isik" />
                <br />
            </Products>
        </div>
    )
};

export default Greetings;