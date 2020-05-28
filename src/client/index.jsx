import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'



class ListItem extends React.Component {

    render() {
      const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

      //console.log(this.props)

      let tweet = this.props.tweet
      // let listTweets = this.props.map(tweet => {
      //     return <div></div>


      // })

        return (
          <div style= {mystyle}>
            <li><img src={tweet.user.profile_image_url}/></li>
            <li>{tweet.user.screen_name}</li>
            <li>{tweet.text}</li>
            <li>{tweet.user.url}</li>
          </div>

        );
    }
}


class App extends React.Component {
  render() {
      //console.log(this.props.tweets.tweets)
      let userTweets = this.props.tweets.tweets.map( (tweet) => {
        return <ListItem tweet={tweet}></ListItem>
      })

    return (
      <div id="app">
        tweets
        {userTweets}
      </div>

    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App tweets={tweets}/>, element );//

console.log("tweet react");

