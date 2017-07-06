import React from 'react';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Image from 'react-bootstrap/lib/Image'
import LoginPage from './loginPage.jsx'
import $ from 'jquery';




export default class SplashPage extends React.Component {

  render() {
    return (


      <div>
        <div className="head">
          <div id="page-content">
      <div className="box-content  box-2 box-style-2 box-shadow">
        <br></br>
        <br></br>
        <h1 className='stat heads'>Welcome to Nuws. We are glad you found us.</h1>
        <h1 className='stat'> If your current relationship has shown signs of abuse, we want to help you get out.</h1>
        {/* <h2 className='stat heads'>Being Aware You May Find Yourself In A Dangerous Situation With Your Partner Is A Great First Step.</h2> */}
        <div id="gradient" />
        <br></br>
        <br></br>
      </div>
    </div>
      </div>

  <div className='stats'>
    <Grid>
   <Row>
   <Col xs={6} md={6}>
     <Thumbnail className='splashstat'>
       <br></br>
       <h1 className='stat numero'>20</h1>
       <h5 className='stat'>The number of people who are victims of intimate partner violence every MINUTE.</h5>

     </Thumbnail>
   </Col>
   <Col xs={6} md={6}>
     <Thumbnail className='splashstat2'>
       <h1 className='stat numero'>1 in 4</h1>
       <h5 className='stat'>The number of women who will be victims of severe violence by an intimate partner in their lifetimes.</h5>

     </Thumbnail>
   </Col>
   </Row>
 </Grid>
 <Grid>
<Row>
<Col xs={6} md={6}>
  <Thumbnail className='splashstat'>
  <h1 className='stat numero'>THREE</h1>
    <h5 className='stat'>The number of women murdered every day by a current or former male partner in the U.S.</h5>


  </Thumbnail>
</Col>
<Col xs={6} md={6}>
  <Thumbnail className='splashstat2'>
    <h1 className='stat numero'>4,774,000</h1>
    <h5 className='stat'>The number of women in the U.S. who experience physical violence by an intimate partner every year.</h5>


  </Thumbnail>
</Col>
</Row>
</Grid>
</div>

<div className="splic">
  <div id="page-content">
<div className="box-content box-2 container box-style-3 box-shadow">
  <br></br>
  <br></br>
  <h1 className='stat'> It is not too late. Check out the features below that Nuws offers to help you plan your escape!</h1>
  <div className="row">
      <br></br>
      <br></br>
  </div>
</div>
</div>
</div>

<div className="container">
    <h4 className='splash-heading'> Features </h4>
</div>
  <div>
    <Grid>
      <Row >
      <Col xs={6} md={4}>
        <Thumbnail className="splash">
          <Glyphicon glyph="envelope"/>
          <h3 className='stat'>Emergency Text</h3>
          <p className='stat'> Enter up to two emergency contact numbers and a message of your choice on the sign up page. At any time you need to reach out to a contact click the 'shop' button located within the 'Nordstrom Rack' picture on the right side. A message will be sent immediately. Example of message: "Come Get me At Home.", "Call the Police."</p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail className="splash">
          <Glyphicon glyph="th-list" />
          <h3 className='stat'>Escape Plan</h3>
          <p className='stat'>At the bottom of the NUWS page, a disguised 'Copyright' button that when clicked on will take you to a page that will help plan YOUR escape. Don't worry if you need to exit the page quickly, just hit the 'Save' button at the bottom or top of page to immediately go back to the "NUWS" page!</p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail className="splash">
          <Glyphicon glyph="heart" />
          <h3 className='stat'>Recording</h3>
          <p className='stat'>The word 'styles' located in the NUWS toolbar is a secret recorder. At any moment you can click that button and begin recording a conversation that you can show the police or family member, etc. You have the option to play,save and delete the recording.</p>
        </Thumbnail>
      </Col>
      </Row>
    </Grid>

          {/* <p>
            <Link to="/signup" className="btn btn-lg btn-success" href="#" role="button">Sign Up</Link>
          </p> */}
</div>
<footer>
      <div className="wrap-footer">
        <div className="container">
          <div className="row">

            <div className="col-md-3 col-footer footer-4">
              <div className='footer'>© 2017 Nuws Development Group</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </div>



    );
  }
}
