import React from 'react';

class ReusableComponents extends React.Component {
    constructor() {
        super();
        this.state = {
            value1: 0
        }
    }

    updateValue() {
        this.setState({
            value1: this.ref1.value
        })
    }

    render() {
        return (
            <NumInput
                type='range'
                min={0}
                max={100}
                step={1}
                value={this.state.value1}
                updateValue={this.updateValue.bind(this)} 
                setNode={node => this.ref1 = node}
                label="Red"
                />
        )
    }
}

class NumInput extends React.Component {
    render() {
        let label = this.props.label === '' ? '' : <label>{this.props.label} - {this.props.value}</label> 
        return (
            <div>
                <input type={this.props.type}
                        min={this.props.min}
                        max={this.props.max}
                        step={this.props.step}
                        defaultValue={this.props.value}
                        onChange={this.props.updateValue}
                        ref={node => this.props.setNode(node)}
                        />
                {label}
            </div>
        )
    }
}

NumInput.propTypes = {
    type: React.PropTypes.oneOf(['range', 'number']),
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    value: React.PropTypes.number,
    updateValue: React.PropTypes.func,
    label: React.PropTypes.string,
    setNode: React.PropTypes.func,
}

NumInput.defaultProps = {
    type: 'range',
    min: 0,
    max: 0,
    step: 1,
    value: 0,
    updateValue: () => {},
    label: '',
    setNode: () => {},
}

export default ReusableComponents;