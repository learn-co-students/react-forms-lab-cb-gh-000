import React from 'react';

const ErrorMessage = () => {
  return <div id="poem-validation-error" style={{color: 'red'}}>
            This poem is not written in the right structure!
         </div>
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      is_valid: false
    };
  }

  handleTextArea = event => {
    this.setState({poem: event.target.value})

    if (this.TextAreaIsValid(event.target.value.split(/\r*\n/))) {
      this.setState({is_valid: true})
    }
  }

  TextAreaIsValid = array => {
    let is_valid = true;

    let checkLengthWord = (string, length) => {
      return string.split(/\s+/).length === length
    }

    if (array.length === 3) {
      array.forEach(function(element, index) {
        if (index === 0) {
          if (!checkLengthWord(element, 5)) {
            is_valid = false
          } 
        }
        else if (index === 1) {
          if (!checkLengthWord(element, 3)) {
            is_valid = false
          } 
        }
        else if (index === 2) {
          if (!checkLengthWord(element, 5)) {
            is_valid = false
          } 
        }
      }, this);
    }
    else {
      is_valid = false;
    }

    return is_valid;
  }

  render() {
    return (
      <div>
        <textarea rows="3"cols="60" value={this.state.poem} 
                  onChange={this.handleTextArea}/>
        { !this.state.is_valid ? <ErrorMessage /> : null }
      </div>  
    );
  }
}

export default PoemWriter;