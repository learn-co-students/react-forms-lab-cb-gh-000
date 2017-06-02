import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.checkInput = this.checkInput.bind(this);
  }

  checkInput(event) {
    this.setState({
      inputValue: event.target.value.slice(0, this.props.maxChars)
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.checkInput} value={this.state.inputValue} />
        <small>{this.props.maxChars - this.state.inputValue.length}</small>
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 35
};
TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number.isRequired,
};
