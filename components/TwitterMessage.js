const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
        value:"",
    };
  }
  onChangeHandle(e){

           if(e.target.value.length<this.props.maxChars){
                this.setState({
                     value:e.target.value
                })

           }

      }
  render() {
    return (
      <div>
        <strong>Your message:{this.props.maxChars -this.state.value.length}</strong>
        <input type="text" onChange={this.onChangeHandle.bind(this)} type="text" value={this.state.value} />
      </div>
    );
  }
}

module.exports = TwitterMessage;
