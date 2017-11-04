var Twit = require('twit');

var twitterAccess = require('./../../config/twitter-access');

var TwitObj = new Twit(twitterAccess);

module.exports.index = function(application, req, res){
  res.render('twitter', {resposta: {}});
}

module.exports.postar = (application, req, res)=>{

  var tweet = {
    status: req.body.textToPost
  }
  TwitObj.post('statuses/update', tweet, (err, data, response) => {
    if(err){
      res.render('twitter', {resposta: {
        erro: {
          msg: 'ERROOOOUUUUUUUUUUU + Faustão feelings'
        }
      }});
      return;
    } else{
      res.render('twitter', {resposta: {
        success: {
          msg: 'Postou like a boss'
        }
      }});
      return;
    }
  });
};

module.exports.listar = (application, req, res)=>{
  toList = {
    q: req.body.textToSearch,
    count: 20
  }
  TwitObj.get('search/tweets', toList, (err, data, response) => {
    if(err){
      console.log(err);
    } else{
      res.render('tweet-list', {resposta: data.statuses});
    }
  });
};