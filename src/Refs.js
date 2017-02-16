import React from 'react';

class Refs extends React.Component {
    constructor() {
        super();
        this.updateValue = this.updateValue.bind(this);
        this.state = {
            value1: '',
            value2: '',
            value3: '',
        }
    }

    updateValue(event) {
        this.setState({
            value1: this.node1.value,
            value2: this.node2.value,
            value3: this.node3.value,
        })
    }

    render() {
        return (
            <div>
                <input type="text" ref={(node) => this.node1 = node} onChange={this.updateValue} /> {this.state.value1}
                <br/>
                <input type="text" ref={(node) => this.node2 = node} onChange={this.updateValue} /> {this.state.value2}
                <br/>
                <CustomInput getRef={(node) => this.node3 = node} updateValue={this.updateValue} /> {this.state.value3}
            </div>
        );
    }
}

class CustomInput extends React.Component {
    render() {
        return (
            <div>
                <input type="text" ref={(node) => this.props.getRef(node)} onChange={this.props.updateValue} />
            </div>
        );
    }
}

export default Refs;