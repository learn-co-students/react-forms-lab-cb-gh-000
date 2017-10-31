import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  onSubmitProxy = event => {
    event.preventDefault();
    if (this.state.username.trim().length && this.state.password.trim().length) {
      this.props.onSubmit({username: this.state.username, password:this.state.password})      
    }
  }

  handleInputChange = event => {
    if (event.target.name === 'password') {
      this.setState({
        password: event.target.value
      });
    }
    else if (event.target.name === 'username') {
      this.setState({
        username: event.target.value
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmitProxy}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username"
                   value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password"
                   value={this.state.password} onChange={this.handleInputChange}/>
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
