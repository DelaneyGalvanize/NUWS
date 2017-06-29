import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Dashboard2 from './dashboard2.jsx'
import Dashboard3 from './dashboard3.jsx'
import Dashboard4 from './dashboard4.jsx'
import AudioRecorder from './recorder/AudioRecorder.jsx'
import Sms from './sms.jsx'
import Carousel from 'react-bootstrap/lib/Carousel'
// import Caption from 'react-bootstrap/lib/Caption'




export default class Dashboard extends React.Component {
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
                 imageP4: result.articles[3].urlToImage
               }

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
      <div>
        <Link to="/plan">Plan</Link>
        <AudioRecorder></AudioRecorder>
        <Sms></Sms>
        <div className="container">


            <Carousel>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500"/>
                {newsList[0]}
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500"/>
                {newsList2[0]}
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500"/>
    {newsList3[0]}
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>





            {/* <h4> carousel of entertainment </h4>
            {newsList[0]}
            {newsList2[0]}
            {newsList3[0]}
            {newsList4[0]} */}

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
            <h4> Trending? </h4>
            <Dashboard4></Dashboard4>
          </div>
        </div>
    </div>


    );
  }
}
