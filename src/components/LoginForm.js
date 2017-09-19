import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      usr: '',
      pw: ''
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      ...this.state,
      usr: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      ...this.state,
      pw: event.target.value
    })
  }

  handleSubmit = (event) => {
    if (this.state.usr.length > 0 && this.state.pw.length > 0) {
      return this.props.onSubmit(this.state.usr, this.state.pw);
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username"
            type="text"
            value={this.state.usr}
            onChange={this.handleUsernameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password"
            type="password"
            value={this.state.pwd}
            onChange={this.handlePasswordChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
