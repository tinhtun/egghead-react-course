import React from "react";
class Children extends React.Component {
    render() {
        return (
           <RButton>I <RHeart/> React</RButton> 
        );
    }
}

const RButton = (props) => (<button>{props.children}</button>);

class RHeart extends React.Component {
  render() {
    return (
      <span>&hearts;</span>
    );
  }
}

export default Children;