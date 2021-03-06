import React from 'react';
import axios from 'axios';

export default class SignupPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    axios.post('/api/users', {
      email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      this.props.histroy.push('/login')
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    })
    event.preventDefault();
  }

  render() {
    return (

      <div className="container wrapper">
        <div className="form-signin">
          <h2 class="form-signin-heading">Welcome to Nuws!</h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={this.state.email} onChange={this.handleChangeEmail} className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={this.state.password} onChange={this.handleChangePassword} className="form-control" placeholder="Password" />
          </div>
            <div className="form-group">
              <label>Emergency Contact Number 1</label>
              <input type="text" className="form-control" placeholder="Emergency Contact 1" />
            </div>
              <div className="form-group">
                <label>Emergency Contact Number 2 (Optional)</label>
                <input type="text" className="form-control" placeholder="Emergency Contact 2" />
              </div>
                <div className="form-group">
                  <label>Emergency Message</label>
                  <input type="text"  className="form-control" placeholder="Please Come Get Me" />
          </div>
          <button type="submit" className="btn btn-default loginbut">Sign Up!</button>
        </form>
      </div>
    </div>
    );
  };
}
