import React from 'react';

class ExtendChildrenFunctionality extends React.Component {
    render() {
        return(
            <Buttons>
                <button value="A">A</button>
                <button value="B">B</button>
                <button value="C">C</button>
            </Buttons>
        )
    }
}


class Buttons extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: 'None'
        }
    }

    selectButton(selectedButton) {
        this.setState({
            selected: selectedButton
        })
    }

    render() {
        let cloneFun = (item) => {
            return React.cloneElement(item, {
                    onClick: this.selectButton.bind(this, item.props.value)
                })
        };

        let items = React.Children.map(this.props.children, cloneFun);
        return (
            <div>
                <h3>You have selected {this.state.selected}</h3>
                {items}
            </div>
        )
    }
}

export default ExtendChildrenFunctionality;