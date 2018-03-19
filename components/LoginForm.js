import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
    
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleFormSubmit(event) {
    event.preventDefault();
    
    const { username, password } = this.state;

    if (!username || !password) {
      return;
    }

    this.props.onSubmit({
      username,
      password
    });
  }
  
  handleInputChange(field, event) {
    this.setState({
      [field]: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange.bind(this, 'username')} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange.bind(this, 'password')} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
