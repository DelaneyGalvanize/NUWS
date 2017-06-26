import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';


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
                 imageP : result.articles[0].urlToImage
               }
              //  console.log('user data', userData)
            },

            error: function (err) {
              console.log(err);
            }
    })
      .then((result) =>{
        this.setState({
          stories: userData.articles,
          pic: userData.imageP
        })
      })
    }


    //what do i render?
    render() {
      let recent = this.state.stories
      let pic= this.state.pic

      console.log('recent',recent)

      let newsList=recent.map(function() {
        return <img src={pic} width="100%" alt='stories' />
      })

      return (
      <div>
        <Link to="/plan">Plan</Link>
        <div className="container " >
          <div className="news-stories">
            {newsList[0]}
          </div>
          <div className="news-stories">
            {newsList[1]}
          </div>
          <div className="news-stories">
            {newsList[2]}
          </div>

      {/* <div className="jumbotron">
        <h1>Nuws</h1>
      </div> */}
    </div>
</div>
    );
  }
}
