import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:null,
      password:null
    };
  }
  handleSubmit(e){

    e.preventDefault()
     if(!!this.state.username && !!this.state.password){

         this.props.onSubmit(this.state.username,this.state.password)
     }
   return 

 }
  handleChangeinput(input,e){
         console.log(e.target.value)
          this.setState({
              [input]:e.target.value
          })
     }

  render() {
    return (
      <form onSubmit = {this.handleSubmit.bind(this)}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange= {this.handleChangeinput.bind(this,"username")} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange= {this.handleChangeinput.bind(this,"password")} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
