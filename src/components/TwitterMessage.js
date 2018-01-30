import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      currentChars: 0,
      remainingChars: 140,
    };

    this.yourMessage = this.yourMessage.bind(this);
  }
  
  yourMessage = (event) => {
    var length = event.target.value.length;
    console.log(this.props.maxChars);
    this.setState({
      message: event.target.value,
      currentChars: event.target.value.length,
      remainingChars: (this.props.maxChars - length),
    });
  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text"
          value={this.state.message}
          onChange={this.yourMessage}/>
        <h4>Characters remaining: {this.state.remainingChars}</h4>
      </div>
    );
  }
}

export default TwitterMessage;