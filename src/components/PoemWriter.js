import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemVal: '',
      isValid: false
    };

    this.handleInput = this.handleInput.bind(this)
  }

  validatePoem = (val) => {
    var lines = val.split('\n')
    lines = lines.map(line => {
      return line.trim()
    })

    if(lines.length !== 3){
      return false
    }else{
      if(lines[0].split(' ').length < 5) return false
      if(lines[1].split(' ').length < 3) return false
      if(lines[2].split(' ').length < 5) return false

      return true
    }
  }

  handleInput = event => {
    this.setState({
      poemVal: event.target.value,
      isValid: this.validatePoem(event.target.value)
    })

  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poemVal}
          onChange={this.handleInput}
        />
        {
          this.state.isValid ? null :
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
