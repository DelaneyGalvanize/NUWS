import React from 'react';

import $ from 'jquery';
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
                 imageP4: result.articles[3].urlToImage,
                 title: result.articles[0].title,
                 title2: result.articles[1].title,
                 title3: result.articles[2].title,
                 title4: result.articles[3].title,
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
          pic4:userData.imageP4,
          title: userData.title,
          title2: userData.title2,
          title3: userData.title3,
          title4: userData.title4,
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
        return <img src={pic} width="100%"  />
      })

      let newsList2=recent.map(function(data) {
        return <img src={pic2} width="100%"  />
      })

      let newsList3=recent.map(function(data) {
        return <img src={pic3} width="100%"  />
      })
      let newsList4=recent.map(function(data) {
        return <img src={pic4} width="100%"  />
      })


      return (
    <Grid>
      <Row>
      <Col xs={6} md={3}>
        <Thumbnail className="sports">
          {newsList[0]}
          <h5>{title}</h5>


        </Thumbnail>
      </Col>
      <Col xs={6} md={3}>
        <Thumbnail className="sports">
          {newsList2[0]}
          <h5>{title2}</h5>


        </Thumbnail>
      </Col>
      <Col xs={6} md={3}>
        <Thumbnail className="sports">
          {newsList3[0]}
          <h5>{title3}</h5>


        </Thumbnail>
      </Col>
      <Col xs={6} md={3}>
        <Thumbnail className="sports">
          {newsList4[0]}
          <h5>{title4}</h5>


        </Thumbnail>
      </Col>
      </Row>
    </Grid>


    );
  }
}
