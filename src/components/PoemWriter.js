import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false,
    };

  }

  onChange = event => {
    var lineCheck = false;

    this.setState({
      value: event.target.value,
    })

//line count functionality
    var lines = event.target.value;
    var lineCount = lines.split(/\r\n|\r|\n/).length
    if (lineCount == 3){
      lineCheck = true;
    }


//word tokenizer
    var lineArr = '';
    lineArr = lines.split('\n');

    var firstLine = lineArr[0];
    var fCheck = false;
    if (firstLine.split(' ').length == 5){
      fCheck = true;
    }

    var secLine = lineArr[1];
    var sCheck = false;
    if (secLine != null){
    if (secLine.split(' ').length == 3){
      sCheck = true;
    }
  }

    var thrLine = lineArr[2];
    if (thrLine != null){
    var tCheck = false;
    if (thrLine.split(' ').length == 5){
      tCheck = true;
    }
  }

    if (fCheck && sCheck && tCheck && lineCheck == true){
      this.setState({
        valid: true,
      })
    } else {
      this.setState({
        valid: false,
      })
    }

  //  console.log(firstLine, secLine, thrLine);

  }



  render() {

    if (this.state.valid == false){
      return (
        <div>
          <textarea
            rows="3"
            cols="60"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
          />
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
        </div>
      );
    } else {
      return(
        <div>
        <textarea
          rows="3"
          cols="60"
          name="text"
          value={this.state.text}
          onChange={this.onChange}
          />
          </div>
      );
    }

  }
}

export default PoemWriter;
