var watsonLanguageTranslatorAccess = require('./../../config/watson-language-translator-access');
var watson = require('watson-developer-cloud');
var languageTranslator = watson.language_translator(watsonLanguageTranslatorAccess);

module.exports.translator = function(application, req, res){
  res.render('translator', {resposta: {}});
}

module.exports.translate = function(application, req, res){
  // res.render('translator', {resposta: {}});
  toTranslate = {
    text: req.body.textToTranslate,
    source: "en",
    target: "pt"
  }
  languageTranslator.translate(toTranslate, (err, data) =>{
    if(err){
    console.log(err);
    } else{
    console.log(data.translations);
    res.render('translator', {resposta: data.translations});
    }
  });
}