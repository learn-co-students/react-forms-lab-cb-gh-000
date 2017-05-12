import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        userName: null,
        password: null
    };
  }

  handleChange(field, e) {
      this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
      e.preventDefault();

      const userName = this.state.userName;
      const password = this.state.password;

      if (userName && password) {
          this.props.onSubmit({
              userName,
              password
          });
      }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.userName} onChange={this.handleChange.bind(this, 'userName')} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleChange.bind(this, 'password')} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
