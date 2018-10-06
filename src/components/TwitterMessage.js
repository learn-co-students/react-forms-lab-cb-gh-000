import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };

    this.setMessage = this.setMessage.bind(this);
  }

  setMessage(ev) {
    this.setState({
      message: ev.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange= {this.setMessage} value={this.state.message}/>
        <div>{this.props.maxChars - this.state.message.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
