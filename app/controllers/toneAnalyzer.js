var watson = require('watson-developer-cloud');

var watsonToneAnalyzerAccess = require('./../../config/watson-tone-analyzer-access');

module.exports.index = function(application, req, res){
  res.render('tone-analyzer', {resposta: {}});
}

module.exports.analize = function(application, req, res){
  var toTranslate = req.body.textToAnalyze;
  var toneAnalyzer = watson.tone_analyzer(watsonToneAnalyzerAccess);
  toneAnalyzer.tone({text: toTranslate}, (err, data)=>{
    if(err){
      console.log(err);
    } else {
      console.log(data.document_tone.tones);
      res.render('tone-analyzer', {resposta: data.document_tone.tones})
    }
  });
}