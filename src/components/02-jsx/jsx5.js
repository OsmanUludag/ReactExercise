import React from 'react'

const Jsx5 = () => {
    const names = ["Maria Rodriguez", "Michael Chen", "Sarah Kim", "Ahmed Hassan"];
    const cities = ["Miami", "Toronto", "Seoul", "Cairo"];

    return (
        <div>
            <ul>
                {
                    names.map((name, index) => <li key={index}>{name}</li>)
                }
            </ul>

            <select>
                {
                    cities.map((city, index) => <option key={index}>{city}</option>)
                }
            </select>
        </div>
    )
}

export default Jsx5