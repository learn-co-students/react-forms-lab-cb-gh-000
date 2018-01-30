import React from "react";

function countWords(line) {
  return line.split(' ').filter(li => li).length;
}

function checkPoem(body) {
  var poemLines = body.split('\n').filter(li => li);
  console.log('poemlines: ' + poemLines);
  var confirmLineCount = poemLines.length === 3;
  var confirmWordCount = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
  
  return confirmLineCount && confirmWordCount;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemText: '',
      validPoem: false,
    };
  }
  
  addPoem = (event) => {
    const body = event.target.value;
    if (body !== '') {
      this.setState({
        poemText: body,
        validPoem: checkPoem(body),
      });
    }
  }

  render() {
    return (
      <div>
      <div>
        <textarea rows="3" cols="60" value={this.state.poemText} onChange={this.addPoem} />
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
      </div>
    );
  }
}

export default PoemWriter;