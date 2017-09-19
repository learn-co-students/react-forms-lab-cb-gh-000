import React from 'react';


class PoemWriter extends React.Component {

  countWords = (line) => {
    return line.split(' ').filter(l => l).length;
  }

  isValidPoem = (poem) => {
    const poemLines = poem.split('\n').filter(l => l);
    if (poemLines.length === 3) {
      if (this.countWords(poemLines[0]) === 5 &&
          this.countWords(poemLines[1]) === 3 &&
          this.countWords(poemLines[2]) === 5) {
            return true;
      }
    }
  }

  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: false
    };
  }

  evaluatePoem = (event) => {
    if(event.target.value) {
      this.setState({
        poem: event.target.value,
        isValid: this.isValidPoem(event.target.value)
      });
    } else {
      this.setState({
        poem: event.target.value
      })
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={this.evaluatePoem}/>
        {!this.state.isValid ? (<div
          id="poem-validation-error"
          style={{color: 'red'}}>
          This poem is not written in the right structure!
        </div>) : null}
      </div>
    );
  }
}

export default PoemWriter;
