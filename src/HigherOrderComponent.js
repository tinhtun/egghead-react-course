import React from 'react';

class HigherOrderComponent extends React.Component {
    render() {
        return (
            <div>
                <ButtonHOC>Button</ButtonHOC>
                <div/>
                <LabelHOC>Label</LabelHOC>
            </div>
        )
    }
}

const HOC = (InnerComponent) => (
    class extends React.Component {
        constructor() {
            super();
            this.state = { count: 0 }
            this.updateCount = this.updateCount.bind(this)
        }

        updateCount(event) {
            this.setState({count: this.state.count + 1})
        }

        render() {
            return (
                <InnerComponent {...this.props} {...this.state} updateCount={this.updateCount} />
            )
        }
    }
)

const ButtonHOC = HOC((props) => (
                    <button onClick={props.updateCount}>
                        {props.children} - {props.count}
                    </button>
                ));

class Label extends React.Component {
    render() {
        return (
            <label onMouseMove={this.props.updateCount}>
                {this.props.children} - {this.props.count}
            </label>
        )
    }
}

const LabelHOC = HOC(Label);

export default HigherOrderComponent;