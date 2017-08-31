import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      usernameVal: '',
      passwordVal: ''
    };

    this.handleInput = this.handleInput.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }
  validateForm = event => {
    if(this.state.usernameVal.length === 0 || this.state.passwordVal.length === 0){
      event.preventDefault()
    }
    return true
  }
  handleInput = event => {
    const name = (event.target.type === 'text' ? 'usernameVal' : 'passwordVal')
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.validateForm}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.handleInput} value={this.state.usernameVal}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.handleInput} value={this.state.password}/>
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
