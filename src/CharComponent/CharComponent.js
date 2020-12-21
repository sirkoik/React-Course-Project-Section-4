import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    const character = props.children === ' '? 'space' : props.children;
    return (
        <div className="characterBlock" onClick={props.onClick}>{character}</div>
    );
}

export default charComponent;