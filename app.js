var app = require('./config/config');

var Twit = require('twit');

var twitterAccess = require('./config/twitter-access');

var TwitObj = new Twit(twitterAccess);

var tweet = {
  status: "Integrando o Node ao Twitter #SaturdayCode"
}

// TwitObj.post('statuses/update', tweet, (err, data, response) => {
//   if(err){
//     console.log(err);
//     console.log('Deu merda');
//   } else{
//     console.log('Deu certo');
//   }
// });

// TwitObj.get('search/tweets', { q: '#CaquiCoders', count: 20}, (err, data, response) => {
//   console.log(data);
// });