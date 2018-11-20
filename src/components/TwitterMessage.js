import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      currChars : ''
    };
  }

  showRemainingChars = event =>{
      this.setState(
        {
          currChars: event.target.value
        }
      );

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="characters" value={this.state.currChars}
          onChange={this.showRemainingChars}/>

        <div className="chars-left">
          {this.props.maxChars - this.state.currChars.length}
        </div>

      </div>
    );
  }
}

export default TwitterMessage;
