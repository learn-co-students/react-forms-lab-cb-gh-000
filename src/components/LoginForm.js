import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
    
  }
  
  logIn = (event) => {
    event.preventDefault();
  }
  
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.logIn}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInput} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name="password" type="password" value={this.state.password} onChange={this.handleInput} />
          </label>
        </div>
        <div>
          <button type="submit" onClick={this.onSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
