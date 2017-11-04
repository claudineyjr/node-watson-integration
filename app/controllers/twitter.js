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
    console.log('Deu merda');
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