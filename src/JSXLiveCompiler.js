import React from 'react';
import './css/JSXLiveCompiler.css';

class JSXLiveCompiler extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '/* JSX text here*/',
            output: '',
            error: ''
        }
    }

    update(event) {
        let jsxCode = event.target.value
        try {
            this.setState({
                output: window.Babel.transform(
                            jsxCode, {presets: ['es2015', 'react']}).code,
                error: ''
            })
        } catch (err) {
            this.setState({
                error: err.message
            })
        }    
    }

    render () {
        return (
            <div className="jsx-compiler-root">
                <header>{this.state.error}</header>
                <div className="container">
                    <textarea defaultValue={this.state.input}
                        onChange={this.update.bind(this)}>
                    </textarea>
                    <pre>
                        {this.state.output}
                    </pre>
                </div>
            </div>
        )
    }
}

export default JSXLiveCompiler;