var { app, Twit, watson, twitterAccess, watsonToneAnalyzerAccess, watsonLanguageTranslatorAccess } = require('./config/server');

app.listen(5000, () =>{
  console.log('Servidor rodando');
})