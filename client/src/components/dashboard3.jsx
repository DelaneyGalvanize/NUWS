import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Navbar from './navBar.jsx'
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';




export default class Dashboard3 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stories: [],
      pic: '',
    }
  }


    componentDidMount() {
      let userData= '';
      $.ajax({
            //method for the HTTP request e.g. GET, POST, ..
            method: 'GET',
            //url is the place where the data lives
            url: `https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=5724121951714814964cebf967657080`,
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
                 imageP4: result.articles[3].urlToImage
               }
               console.log('imageP', userData.imageP)
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
          pic4:userData.imageP4
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

      console.log(recent)

      let newsList=recent.map(function(data) {
        return <img src={pic} width="50%" alt='stories' />
      })

      let newsList2=recent.map(function(data) {
        return <img src={pic2} width="50%" alt='stories' />
      })

      let newsList3=recent.map(function(data) {
        return <img src={pic3} width="50%" alt='stories' />
      })
      let newsList4=recent.map(function(data) {
        return <img src={pic4} width="50%" alt='stories' />
      })


      return (
    //   <div>
    //     <div className="container">
    //       <div className="news-stories">
    //         {newsList[0]}
    //         {newsList2[0]}
    //         {newsList3[0]}
    //         {newsList4[0]}
    //       </div>
    //     </div>
    // </div>

    <Grid>
      <Row>
      <Col xs={6} md={3}>
        <Thumbnail>
          {newsList[0]}
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="primary">Button</Button>&nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={3}>
        <Thumbnail>
          {newsList2[0]}
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="primary">Button</Button>&nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={3}>
        <Thumbnail>
          {newsList3[0]}
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="primary">Button</Button>&nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={3}>
        <Thumbnail>
          {newsList4[0]}
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="primary">Button</Button>&nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Col>
      </Row>
    </Grid>


    );
  }
}
