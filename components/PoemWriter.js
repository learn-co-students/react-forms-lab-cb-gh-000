const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      alue: "",
        valid: false
    };
  }
  handleChange(e) {
     if(e.target.value){
          var rouw = e.target.value.split(/\n/).filter(line=>line)

          let validline = rouw.length === 3

          let row1 = rouw[0].split(" ").filter(words => words).length === 5
          let row2 = rouw[1] ? rouw[1].split(" ").filter(words => words).length === 3 : false
          let row3 = rouw[2] ? rouw[2].split(" ").filter(words => words).length === 5 : false


          let validWorld = row1 && row2 && row3


          this.setState({
              value: e.target.value,
              valid: validline && validWorld
          })}
      }
  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange.bind(this)} value={this.state.value} />
         {!this.state.valid ? <div id="poem-validation-error" style={{ color: 'red' }} >This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;
