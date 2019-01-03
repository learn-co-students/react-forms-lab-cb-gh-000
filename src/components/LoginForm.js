import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}
  handleSubmit = event => {
    event.preventDefault()

    // just did w/e would work here.
    let username = this.state.username
    let password = this.state.password

    if (username !== '' && password !== '') {
      // onSubmit prop is a func in App.js
      this.props.onSubmit({username, password})

    }
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
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
