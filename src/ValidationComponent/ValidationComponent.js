//import React from 'react';

const validationComponent = (props) => {
    return props.textLength >= props.minLength? "Text long enough" : "Text too short";
}

export default validationComponent;