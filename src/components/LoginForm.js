import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };

    this.logIn = this.logIn.bind(this);
  }

  handleInput = event => {
    this.setState({
        [event.target.name]: event.target.value,
        [event.target.name]: event.target.value,
    })
  }

  logIn = event => {
    event.preventDefault();
  }



  render() {
    return (
      <form onSubmit={this.logIn}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInput}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleInput}/>
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
