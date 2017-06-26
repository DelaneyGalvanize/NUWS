import React from 'react';
import { Link } from 'react-router-dom';

export default class SplashPage extends React.Component {

  render() {
    return (
      <div className = 'container' >
        <div className="jumbotron">

          <h2>Being Aware You May Find Yourself In A Dangerous Relationship Is A Great First Step.</h2>
          <p className="lead">If your current relationship has shown signs of abuse, we want to help you get out.</p>
        </div>
        <div className= 'jumbotron' >
          <h3>The form on the next page allows you to put in two of your closest contacts and their phone numbers. When you double click the (black) bar at the top of the NUWS page a text with a message of your choice will be sent to your contacts immediately. </h3>

              <h3>
          At the bottom of the "NUWS" page there is a disguised 'Copyright' button that when clicked on will take you to a page that will help plan YOUR escape. Don't worry if you need to exit the page quickly, just hit the 'Home' button to immediately go back to the "NUWS" page!</h3>
          {/* <p className="lead">It's how you spend it.</p> */}
          <p>
            <Link to="/signup" className="btn btn-lg btn-success" href="#" role="button">Sign Up</Link>
          </p>
        </div>

      </div>

    );
  }
}
