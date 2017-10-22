import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      password: '',
      username: ''
    };
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onUsernameChangeHander = this.onUsernameChangeHander.bind(this);
  }

  onPasswordChangeHandler = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  onUsernameChangeHander = (event) => {
    this.setState({
      username: event.target.value
    });
  }
  onSubmit = (event) => {
    if(this.state.username.length > 0 && this.state.password.length > 0)
      this.props.onSubmit(this.state.username, this.state.password);
    else
      event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.onUsernameChangeHander}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.onPasswordChangeHandler}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
