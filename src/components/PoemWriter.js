import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value:'',
      showError:true,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    var string = event.target.value.replace(/  +/g, ' ');
    var data = string.split("\n");
    if (data.length==3) {
      if (data[0].trim().split(" ").length==5 && data[1].trim().split(" ").length==3 && data[2].trim().split(" ").length==5){
        this.setState({showError: false});
      }
    }
  }
  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
        value={this.state.value} onChange={this.handleChange}/>
        {this.state.showError?<div id="poem-validation-error" style={{color: 'red'}}> This poem is not written in the right structure!</div>: null}
      </div>
    );
  }
}

export default PoemWriter;
