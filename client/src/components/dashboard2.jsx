import React from 'react';
import $ from 'jquery';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';



export default class Dashboard2 extends React.Component {
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
            url: `https://newsapi.org/v1/articles?source=cnbc&sortBy=top&apiKey=5724121951714814964cebf967657080`,
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
                 des:result.articles[0].description,
                 des2:result.articles[1].description,
                 des3:result.articles[2].description,
                 des4:result.articles[3].description
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
          des:userData.des,
          des2:userData.des2,
          des3:userData.des3,
          des4:userData.des4
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
      let des=this.state.des
      let des2=this.state.des2
      let des3=this.state.des3
      let des4=this.state.des4



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
    <Grid >
      <Row>
      <Col xs={6} md={6}>
        <Thumbnail className="daily">
          {newsList[0]}
          <p>{des}</p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={6}>
        <Thumbnail className="daily">
          {newsList2[0]}
          <p>{des2}</p>

        </Thumbnail>
      </Col>
      <Col xs={6} md={6}>
        <Thumbnail className="daily">
          {newsList3[0]}
          <p>{des3}</p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={6}>
        <Thumbnail className="daily">
          {newsList4[0]}
          <p>{des4}</p>
        </Thumbnail>
      </Col>
      </Row>
    </Grid>

    );
  }
}
