import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      isValid: true
    };

    this.checkInput = this.checkInput.bind(this);
  }

  checkInput(event) {
    let inputValue = event.target.value;
    let isValid = /(\s*\w+\s*){5}\n(\s*\w+\s*){3}\n(\s*\w+\s*){5}/.test(inputValue);
    this.setState({
      inputValue: inputValue,
      isValid: isValid
    });
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.checkInput} value={this.state.inputValue} />
        {(!this.state.isValid) ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}
