import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
        value: '',
        valid: false
    };
  }
    
handleChange = event => {
    
    if(event.target.value) {
        var row = event.target.value.split(/\n/).filter(l => l);
        
        var validLine = row.length === 3;
        
        var firstRow = row[0].split(" ").filter(words => words).length === 5;
        var secondRow = row[1] ? row[1].split(" ").filter(words => words).length === 3 : false;
        var thirdRow = row[2] ? row[2].split(" ").filter(words => words).length === 5 : false;
        
        var validText = firstRow && secondRow && thirdRow;
        
    this.setState({
        value: event.target.value,
        valid: validLine && validText
    })}
}


  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        {!this.state.valid ? <div id="poem-validation-error" style={{ color: 'red' }} >This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

export default PoemWriter;