import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chars: this.props.maxChars,
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState((prevState) => {
      return {
        chars: --prevState.chars,
        message: event.target.value,
      };
    });
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange}/>
        <p>{this.state.chars} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
