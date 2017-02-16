import React from 'react';
import ReactDOM from 'react-dom';

class LifecyclesTwo extends React.Component {
    constructor() {
        super();
        this.state = {
            increasing: false,
        }
        this.updateValue = this.updateValue.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.val)
    }

    updateValue(event) {
        ReactDOM.render(<LifecyclesTwo val={this.props.val + 1} />, document.getElementById("root"))
    }

    render() {
        return (
            <button onClick={this.updateValue}>{this.props.val}</button>
        )
    }
}

LifecyclesTwo.defaultProps = {
    val: 0
}

export default LifecyclesTwo;