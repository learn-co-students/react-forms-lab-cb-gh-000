import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      count: 0
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler = (event) => {
    this.setState({
      value: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.onChangeHandler} />
        <p>Quedan {this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
