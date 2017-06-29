import React from 'react';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'


export default class SplashPage extends React.Component {

  render() {
    return (


      <div className = 'container' >
        <div className="jumbotron">
          <h1> Welcome to Nuws </h1>
          <h2>Being Aware You May Find Yourself In A Dangerous Relationship Is A Great First Step.</h2>
          <p> If your current relationship has shown signs of abuse, we want to help you get out.</p>
        </div>

        <div className= 'jumbotron' >
          <div id="page-content" className="index-page">
      <div className="box-content box-2 container box-style-2 box-shadow">
          <div className="row">
              {/* <div className="col-md-12">
                  <p>Stats?</p>
                  <p>Stats?</p>
                  <p>Stats?</p>
              </div> */}
          </div>
      </div>
    </div>
    <Grid>
      <Row className="splash">
      <Col xs={6} md={4}>
        <Thumbnail className>
          <Glyphicon glyph="envelope"/>
          <h3>Emergency Text</h3>
          <p> You are allowed to enter two emergency contact numbers. When you double click the (black) bar at the top of the NUWS page a text with a message of your choice will be sent to your contacts immediately. Ex. "Come Get me At Home", "Call the Police"</p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail>
          <Glyphicon glyph="th-list" />
          <h3>Escape Plan</h3>
          <p>At the bottom of the NUWS page, a disguised 'Copyright' button that when clicked on will take you to a page that will help plan YOUR escape. Don't worry if you need to exit the page quickly, just hit the 'Home' button to immediately go back to the NUWS page!</p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail>
          <Glyphicon glyph="heart" />
          <h3>Recording</h3>
          <p>I am hoping there will be a chat feature. Or I want to be able to save the emergency Plan to a CSV. RECORDING DEVICE??? YES do this first before the chat feature. You're not alone. Blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah</p>
        </Thumbnail>
      </Col>
      </Row>
    </Grid>
          <p>
            <Link to="/signup" className="btn btn-lg btn-success" href="#" role="button">Sign Up</Link>
          </p>

        </div>

      </div>

    );
  }
}
