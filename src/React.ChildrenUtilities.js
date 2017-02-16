import React from 'react';

class ChildrenUtilities extends React.Component {
    render() {
        return (
            <Parent>
                <div className="classOne"></div>
                <div className="classTwo"></div>
            </Parent>
        )
    }
}

class Parent extends React.Component {
    render() {
        let items = React.Children.map(this.props.children, (item) => item)
        console.log(items)
        React.Children.forEach(this.props.children, (item) => { console.log(item.props.className) })
        
        return (
            null
        )
    }
}

export default ChildrenUtilities;