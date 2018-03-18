import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: false
    };
  }

  textareaChange = (event) => {
    this.setState({
      poem: event.target.value,
    }, function() {
      this.setState({
        isValid: this.validatePoem()
      }, function() {
        console.log(this.state.isValid);
      });
    });
  }

  validatePoem = () => {
    let poemLines = this.state.poem.split('\n');

    // Fail if poem does not have exactly 3 lines
    if (poemLines.length !== 3) {
      return false;
    }

    console.log(poemLines[2].split(' '));

    // Fail if line lengths are not correct
    let firstLineIsValid = poemLines[0].split(' ').length >= 5;
    let secondLineIsValid = poemLines[1].split(' ').length >= 3;
    let thirdLineIsValid = poemLines[2].split(' ').length >= 5;

    return firstLineIsValid && secondLineIsValid && thirdLineIsValid;
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.textareaChange} />
        {!this.state.isValid &&
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
