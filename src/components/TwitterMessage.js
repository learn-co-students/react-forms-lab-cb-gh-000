import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageVal: '',
      maxChars: this.props.maxChars
    };

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput = event => {
    this.setState({
      messageVal: event.target.value
    })
    this.state.maxChars--
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleInput} value={this.state.messageVal}/>
        {this.state.maxChars} remaining
      </div>
    );
  }
}

export default TwitterMessage;
