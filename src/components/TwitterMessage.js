import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  handleInputChange = event => {
    if (event.target.value.length <= this.props.maxChars) {
      this.setState({
        message: event.target.value
      })
    }
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        onChange={ event => this.handleInputChange(event) }
        value={this.state.message}
        type="text" name="message" id="message" />
        <span> {this.props.maxChars - this.state.message.length} characters left</span>
      </div>
    );
  }
}

export default TwitterMessage;
