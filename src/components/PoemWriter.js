import React from "react";

function countWords(line) {
  return line.split(' ').filter(l => l).length;
}

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
    const isFirstLine = countWords(lines[0]) === 5;
    const isSecondLine = numLines > 1 ? countWords(lines[1]) === 3 : null;
    const isThirdLine = numLines > 2 ? countWords(lines[2]) === 5 : null;

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
