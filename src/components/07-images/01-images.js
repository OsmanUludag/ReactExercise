import React from 'react';
import northernLights from "../../assets/img/image1.jpg";

const Images1 = () => {

    return (
        <div>
            <img
                src="./image6.jpg"
                width={300}
                alt="image6"
                title='hovered version'
            />

            <img
                src="https://picsum.photos/id/2/300/200"
                alt="little dog"
                title='little dog'
            />

            <img
                src={northernLights}
                width={300}
                alt="northern lights"
                title="northern lights"
            />

            <img
                src={require("../../assets/img/image2.jpg")}
                alt="forest"
                title='forest'
                width={300}
            />
        </div>
    )
};


export default Images1;