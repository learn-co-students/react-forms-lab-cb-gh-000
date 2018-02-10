import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: false
    };
  }
  handleText = event => {
    const text = event.target.value;
    const lines = text.split('\n');
    const numLines = lines.length;
    const hasThreeLines = numLines === 3;
    const isFirstLine = lines[0].split(' ').length === 5;
    const isSecondLine = numLines > 1 ? lines[1].split(' ').length === 3 : null;
    const isThirdLine = numLines > 2 ? lines[2].split(' ').length === 5 : null;

    const isValid = hasThreeLines && isFirstLine && isSecondLine && isThirdLine
    this.setState({
      value: text,
      isValid
    })

  }
  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleText}/>
        {!this.state.isValid ? <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div> : null}

      </div>
    );
  }
}

export default PoemWriter;
