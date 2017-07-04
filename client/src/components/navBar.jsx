import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor() {
    super();

    this.signOutFunc = this.signOutFunc.bind(this);
  }

  signOutFunc() {
    this.props.onSignOut();
    this.props.history.push('/');
  }

  render() {
    let signUpButton = null;
    let logInButton = null;
    let signOutButton = null;
    if (!this.props.loggedIn) {
      signUpButton = (
        <li role="presentation">
          <Link to="/signup">Sign Up</Link>
        </li>
      )
      logInButton = (
        <li role="presentation">
          <Link to="/login">Log In</Link>
        </li>
      )
    }
    else {
      signOutButton = (
        <li role="presentation">
          <a onClick={this.signOutFunc}>Sign Out</a>
          {/* href="#"  */}
        </li>
      )
    }

    return (
      <div className="header clearfix">
        <nav>
          <ul className="nav nav-pills pull-right">
            <li role="presentation">
              <Link to="/"></Link>
            </li>
            {signUpButton}
            {logInButton}
            {signOutButton}
          </ul>
        </nav>
        <h2 className="text-muted">Nuws</h2>
      </div>
    )
  }
}

export default withRouter(Navbar);
