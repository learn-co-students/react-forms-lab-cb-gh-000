import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
        value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
      this.setState({
          value: e.target.value,
      });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>Characters left: {this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}
