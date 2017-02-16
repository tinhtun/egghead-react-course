import React from 'react';

class Validation extends React.Component {
    render() {
        return (
            <Title text='Title Text' customStyle='123456'/>
        );
    }
}

const Title = (props) => (<h1>{props.text}</h1>);

Title.propTypes = {
    text: React.PropTypes.string.isRequired,
    customStyle(props, propName, componentName) {
        if (!(propName in props)) {
            return new Error('Missing ' + propName);
        }
        if (props[propName].length < 6) {
            return new Error('Length was too short for ' 
                + propName + ' in ' + componentName);
        }
    }
}

export default Validation;