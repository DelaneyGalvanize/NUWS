import React from 'react';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Image from 'react-bootstrap/lib/Image'




export default class SplashPage extends React.Component {

  render() {
    return (


      <div className='container'>
        <div className="jumbotron">
          <div id="page-content">
      <div className="box-content  box-2  box-style-2 box-shadow">
        <h1> Nuws </h1>
        <h2>Being Aware You May Find Yourself In A Dangerous Relationship Is A Great First Step.</h2>
        <br></br>
        <br></br>
      </div>
    </div>
      </div>

  <div className="jumbotron middle ">
    <Grid>
        <Row>

  <Col xs={6} md={4}>
  <Image className='circle' src="https://www.newton.ac.uk/files/covers/968361.jpg" circle/>
  </Col>
  {/* <Col xs={6} md={4}>
    <h1> You are not alone </h1>
  </Col> */}
  <Col xs={6} md={4}>
  <Image className='circle' src="https://www.newton.ac.uk/files/covers/968361.jpg" circle />
  </Col>
  <Col xs={6} md={4}>
  <Image className='circle' src="https://www.newton.ac.uk/files/covers/968361.jpg" circle/>
  </Col>
  {/* <Col xs={6} md={4}>
    <h1> You are not alone </h1>
  </Col> */}
  <Col xs={6} md={6}>
  <Image className='circle circle4' src="https://www.newton.ac.uk/files/covers/968361.jpg" circle />
  </Col>
  <Col xs={6} md={6}>
  <Image className='circle' src="https://www.newton.ac.uk/files/covers/968361.jpg" circle />
  </Col>
</Row>
</Grid>
</div>

<div className="jumbotron splic">
  <div id="page-content">
<div className="box-content box-2 container box-style-3 box-shadow">
  <h1> If your current relationship has shown signs of abuse, we want to help you get out.</h1>
  <div className="row">
  </div>
</div>
</div>
</div>
  <div className="jumbotron">
    <Grid>
      <Row >
      <Col xs={6} md={4}>
        <Thumbnail className="splash">
          <Glyphicon glyph="envelope"/>
          <h3>Emergency Text</h3>
          <p> You are allowed to enter two emergency contact numbers. When you double click the (black) bar at the top of the NUWS page a text with a message of your choice will be sent to your contacts immediately. Ex. "Come Get me At Home", "Call the Police"</p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail className="splash">
          <Glyphicon glyph="th-list" />
          <h3>Escape Plan</h3>
          <p>At the bottom of the NUWS page, a disguised 'Copyright' button that when clicked on will take you to a page that will help plan YOUR escape. Don't worry if you need to exit the page quickly, just hit the 'Home' button to immediately go back to the NUWS page!</p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail className="splash">
          <Glyphicon glyph="heart" />
          <h3>Recording</h3>
          <p>I am hoping there will be a chat feature. Or I want to be able to save the emergency Plan to a CSV. RECORDING DEVICE??? YES do this first before the chat feature. You're not alone. Blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah</p>
        </Thumbnail>
      </Col>
      </Row>
    </Grid>

          {/* <p>
            <Link to="/signup" className="btn btn-lg btn-success" href="#" role="button">Sign Up</Link>
          </p> */}
</div>

        </div>



    );
  }
}
