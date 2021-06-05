import React from 'react';
import './component1.css';

export const Stars = (props) => {
    return(
        <>
            <h1 className = 'stars'>
                {props.name}
                {props.age}
            </h1>
        </>
    )
};