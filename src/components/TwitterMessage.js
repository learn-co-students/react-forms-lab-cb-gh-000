import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
message:'f'

    };
  }
  handleInputChange=(e)=>{


    this.setState({   message: e.target.value})
  }
  render() {
  console.log( parseInt(this.state.message.length)-parseInt(this.props.maxChars));
    return (
      <div>
        <strong>Your message:</strong>
        <input name="message" type="text" value={this.state.message} onChange={this.handleInputChange}  />
        <p>{this.props.maxChars}</p>
        <p>{parseInt(this.props.maxChars)-parseInt(this.state.message.length)}</p>

      </div>
    );
  }
}

export default TwitterMessage;
