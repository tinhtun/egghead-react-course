import React from 'react';
import ReactDOM from 'react-dom'

class LifeCycles extends React.Component {
    constructor() {
        super();
        this.state = {
            val: 0,
            messages: [],
        }
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(event) {
        this.setState({
            val: this.state.val + 1,
        });
    }

    updateLifecycleLogs(message) {
        this.state.messages.push(message);
        this.setState({
            messages: this.state.messages, 
        });
    }

    // Call right before component will mount to DOM
    componentWillMount() {
        console.log("componentWillMount() executed.")
        this.updateLifecycleLogs("componentWillMount() executed.")
    }

    // Call after component has been mounted to DOM
    componentDidMount() {
        console.log("componentDidMount() executed.")
        this.updateLifecycleLogs("componentDidMount() executed.")
    }

    // Call right before component will unmount from DOM
    componentWillUnmount() {
        console.log("componentWillUnmount() executed.")
        this.updateLifecycleLogs("componentWillUnmount() executed.")
    }

    render() {
        console.log("render");
        return (
            <div>
                <button onClick={this.updateValue} style={{'width': '100px'}}>
                    {this.state.val}
                </button>
                <div>{ this.state.messages.map((msg, key) => <span key={key}>{msg} <br/></span> )}</div>
            </div>
        );
    }
}

class Wrapper extends React.Component {
    constructor() {
        super();
        this.mount = this.mount.bind(this);
        this.unmount = this.unmount.bind(this);
    }

    mount(event) {
        ReactDOM.render(<LifeCycles />, document.getElementById('lifeCycleMP'))
    }

    unmount(event) {
        ReactDOM.unmountComponentAtNode(document.getElementById('lifeCycleMP'))
    }

    render() {
        return (
            <div>
                <button onClick={this.mount}>Mount</button>
                <button onClick={this.unmount}>UnMount</button>
                <div id="lifeCycleMP"></div>
            </div>
        )
    }
}

export default Wrapper;