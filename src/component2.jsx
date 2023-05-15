import React from 'react';
import Component3 from './Component3';

function Component2(props) {
    return (
        <div>
            <h1>
                hello Component 2{props.user}
            </h1>
            <Component3 />
        </div>
    );
}

export default Component2;