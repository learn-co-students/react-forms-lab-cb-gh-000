import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      val: ''
    };
  }
  check = (event)=>{
    this.setState({
      val: event.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.check} value={this.state.val}/>
        <small>{this.props.maxChars - this.state.val.length} characters remaining</small>
      </div>
    );
  }
}

export default TwitterMessage;
