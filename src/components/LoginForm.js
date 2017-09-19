import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      usr: '',
      pw: ''
    };
  }

  handlePasswordChange = (event) => {
    this.setState({
      ...this.state,
      usr: 'event.target.value'
    })
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="test-username"
            type="text"
            value={this.state.usr}
            onChange={this.handlePasswordChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" />
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
