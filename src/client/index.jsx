import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'



// class ListItem extends React.Component {

//     render() {

//       console.log(this.props)

//       let listColors = this.props.tweets.tweets.map(color => {
//           return <li>{color}</li>
//       })

//         return (
//           <div>
//           <li>{this.props.tweets.tweet}</li>
//           <li>{this.props.item.weight}</li>
//           <li>{listColors}</li>
//           </div>

//         );
//     }
// }


class App extends React.Component {
  render() {
      console.log(this.props.tweets.tweets)
      let userTweets = this.props.tweets.tweets.map( (tweet) => {
        return <li>{tweet.user.screen_name}</li>
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

