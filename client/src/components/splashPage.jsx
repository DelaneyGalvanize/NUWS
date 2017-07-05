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
        <h1> Nuws. </h1>
        <h2>Being Aware You May Find Yourself In A Dangerous Relationship Is A Great First Step.</h2>
        <br></br>
        <br></br>
      </div>
    </div>
      </div>

  <div className="jumbotron">
    <Grid>
   <Row>
   <Col xs={6} md={6}>
     <Thumbnail>
       <br></br>
       <h3>Every minute, 20 people are victims of intimate partner violence</h3>

     </Thumbnail>
   </Col>
   <Col xs={6} md={6}>
     <Thumbnail>
       <h1>1 in 4</h1>
       <h5>The number of women who will be victims of severe violence by an intimate partner in their lifetimes.</h5>

     </Thumbnail>
   </Col>
   </Row>
 </Grid>
 <Grid>
<Row>
<Col xs={6} md={6}>
  <Thumbnail>
  <h1>THREE</h1>
    <h5>The number of women murdered every day by a current or former male partner in the U.S.</h5>


  </Thumbnail>
</Col>
<Col xs={6} md={6}>
  <Thumbnail>
    <h1>4,774,000</h1>
    <h5>The number of women in the U.S. who experience physical violence by an intimate partner every year.</h5>


  </Thumbnail>
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
          <p>At the bottom of the NUWS page, a disguised 'Copyright' button that when clicked on will take you to a page that will help plan YOUR escape. Don't worry if you need to exit the page quickly, just hit the 'Save' button to immediately go back to the NUWS page!</p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail className="splash">
          <Glyphicon glyph="heart" />
          <h3>Recording</h3>
          <p>The period "." in the NUWS logo on the "nuws" page is a secret recorder. At any moment you can click that button and begin recording a conversation that you can show the police or family member, etc. You have the option to save and delete the recording.</p>
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
