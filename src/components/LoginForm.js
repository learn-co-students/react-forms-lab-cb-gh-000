import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange(event) {
    if (event.target.name==="username"){
      this.setState({username: event.target.value});
    }
    else {
        this.setState({password: event.target.value});
    }
  }
  submit(event){
     const username = this.state.username;
     const password = this.state.password;
     const submit = this.props.onSubmit;
     event.preventDefault();
     (username && password) ? submit({username, password}) : alert('Error');
  }
  render() {
    return (
      <form onSubmit={this.submit} >
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
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
