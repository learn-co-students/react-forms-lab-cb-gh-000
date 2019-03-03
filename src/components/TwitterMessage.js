import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      restChars: props.maxChars
    };
  }

  handleChange = event => {
    const maxChars = this.props.maxChars
    this.setState({
      message: event.target.value,
      restChars: maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}/>
        <span>{this.state.restChars}</span>
      </div>
    );
  }
}

export default TwitterMessage;
