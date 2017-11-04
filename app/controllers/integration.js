var Twit = require('twit');

var twitterAccess = require('./../../config/twitter-access');

var TwitObj = new Twit(twitterAccess);

var watson = require('watson-developer-cloud');

var watsonLanguageTranslatorAccess = require('./../../config/watson-language-translator-access');

var watsonToneAnalyzerAccess = require('./../../config/watson-tone-analyzer-access');

var languageTranslator = watson.language_translator(watsonLanguageTranslatorAccess);

var toneAnalyzer = watson.tone_analyzer(watsonToneAnalyzerAccess);

module.exports.index = (application, req, res)=>{
  res.render('integration', {resposta: {}});
}

module.exports.analyze = (application, req, res)=>{
  let toSearch = '';
  TwitObj.get('search/tweets', {q: req.body.tweetsToAnalyze, count: 20}, (err, data, response)=>{
    if(err){
      console.log(err);
    } else {
      console.log(data);
      for(let tweet of data.statuses){
        toSearch = toSearch + ' ' + tweet.text;
      }
      toTranslate = {
        text: toSearch,
        source: "pt",
        target: "en"
      }
      languageTranslator.translate(toTranslate, (err, traduzido)=>{
        if(err){
          console.log(err);
        } else {
          toAnalyze = {
            text: traduzido.translations[0].translation
          };
          toneAnalyzer.tone(toAnalyze, (err, data)=>{
            if(err){
              console.log(err);
            } else{
              console.log(data.document_tone.tones);
              res.render('tone-analyzer', {resposta: data.document_tone.tones});
            }
          });
        }
      });
    }
  });
}