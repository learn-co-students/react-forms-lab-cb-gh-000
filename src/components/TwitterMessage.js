import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: '',
      // {/*  starts out as what is given from the prop. */}
      chars: props.maxChars
    };
  }

  handleFirstNameChange = event => {
  this.setState({
    tweet: event.target.value,

    chars: this.props.maxChars - event.target.value.length
  })


}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleFirstNameChange(event)} value={this.state.tweet}  />
        {/*  <p>{this.state.chars}</p> */}
        <p>{this.state.chars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
