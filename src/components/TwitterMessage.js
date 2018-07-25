import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }
  onInputChange = (event) => {
    this.setState({value: event.target.value})
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onInputChange}/>
          <label>You have {this.props.maxChars - this.state.value.length} characters left</label>
      </div>
    );
  }
}

export default TwitterMessage;
