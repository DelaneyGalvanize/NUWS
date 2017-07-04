import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Dashboard2 from './dashboard2.jsx'
import Dashboard3 from './dashboard3.jsx'
import Dashboard4 from './dashboard4.jsx'
import AudioRecorder from './recorder/AudioRecorder.jsx'
import Sms from './sms.jsx'
import Carousel from 'react-bootstrap/lib/Carousel'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';




export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stories: [],
      pic: '',
      title: '',
    }
  }


    componentDidMount() {
      let userData= '';
      $.ajax({
            //method for the HTTP request e.g. GET, POST, ..
            method: 'GET',
            //url is the place where the data lives
            url: `https://newsapi.org/v1/articles?source=mtv-news&sortBy=latest&apiKey=5724121951714814964cebf967657080`,
            //the format of data you want to get back
            dataType: 'json',
            //stuff that happens if I get the data I want back
            success: function(result) {
                // console.log('result',result);
              userData = {
                 articles: result.articles,
                 imageP : result.articles[0].urlToImage,
                 imageP2: result.articles[1].urlToImage,
                 imageP3: result.articles[2].urlToImage,
                 imageP4: result.articles[3].urlToImage,
                 title: result.articles[0].title,
                 title2: result.articles[1].title,
                 title3: result.articles[2].title,
                 title4: result.articles[3].title,
               }
               console.log(result)

            },

            error: function (err) {
              console.log(err);
            }
    })
      .then(() =>{
        this.setState({
          stories: userData.articles,
          pic: userData.imageP,
          pic2:userData.imageP2,
          pic3:userData.imageP3,
          pic4:userData.imageP4,
          title: userData.title,
          title2: userData.title2,
          title3: userData.title3,
          title4: userData.title4
        })
      })
    }




    //what do i render?
    render() {
      let recent = this.state.stories
      let pic= this.state.pic
      let pic2 = this.state.pic2
      let pic3=this.state.pic3
      let pic4= this.state.pic4
      let title = this.state.title
      let title2= this.state.title2
      let title3= this.state.title3
      let title4= this.state.title4

      let newsList=recent.map(function(data) {
        return <img src={pic} />
      })

      let newsList2=recent.map(function(data) {
        return <img src={pic2}  />
      })

      let newsList3=recent.map(function(data) {
        return <img src={pic3}  />
      })
      let newsList4=recent.map(function(data) {
        return <img src={pic4}  />
      })


      return (
      <div>
        {/* <Link to="/plan">Plan</Link>
        <AudioRecorder></AudioRecorder>
        <Sms></Sms> */}
        <h4> Top Entertainment</h4>
        <div className="container">

          <Grid>
            <Row>
            <Col xs={6} md={6}>
            <Carousel>
              <Carousel.Item>
                {newsList[0]}
                <h5>{title}</h5>

              </Carousel.Item>
              <Carousel.Item>
                {newsList2[0]}
                <h5>{title2}</h5>
              </Carousel.Item>
              <Carousel.Item>
                {newsList3[0]}
                <h5>{title3}</h5>
              </Carousel.Item>
              <Carousel.Item>
                {newsList4[0]}
                <h5>{title4}</h5>
              </Carousel.Item>
</Carousel>
</Col>


<Col xs={6} md={6}>
  <Col xs={6} md={6}>
    <Thumbnail className='store' src="https://sanctuaryofstyle.files.wordpress.com/2012/01/nordstrom-rack-logo.jpg"  >
    </Thumbnail>
  </Col>

  <Col xs={6} md={6}>
    <Thumbnail  className='store' src="http://www.vailplace.org/wp-content/uploads/2012/12/1-target-logo.jpg"  >
    </Thumbnail>
  </Col>

  <Col xs={6} md={6}>
    <Thumbnail  src="   https://seeklogo.com/images/P/pinterest-icon-logo-D4965B6748-seeklogo.com.gif" className="store" >
    </Thumbnail>
  </Col>

  <Col xs={6} md={6}>
    <Thumbnail  src="https://www.cuckooforcoupondeals.com/wp-content/uploads/2015/01/Ben-Jerrys-COupon.png" className='store'>
    </Thumbnail>
  </Col>

  </Col>
  </Row>
</Grid>
        </div>

        <div className="container">
          <div className="news-stories">
            <h4> Daily News </h4>
            <Dashboard2></Dashboard2>
          </div>
        </div>
        <div className="container">
          <div className="news-stories">
            <h4> Sports </h4>
            <Dashboard3></Dashboard3>
          </div>
        </div>
        <div className="container">
          <div className="news-stories">
            <h4> Trending </h4>
            <Dashboard4></Dashboard4>
          </div>
        </div>
    </div>


    );
  }
}
