var { app, Twit, watson, twitterAccess, watsonAccess } = require('./config/server');

var toneAnalyzer = watson.tone_analyzer(watsonAccess);

var TwitObj = new Twit(twitterAccess);

var tweet = {
  status: "Integrando o Node ao Twitter #SaturdayCode"
}

app.listen(5000, () =>{
  console.log('Servidor rodando');
})

// TwitObj.post('statuses/update', tweet, (err, data, response) => {
//   if(err){
//     console.log(err);
//     console.log('Deu merda');
//   } else{
//     console.log('Deu certo');
//   }
// });

// TwitObj.get('search/tweets', { q: '#Trump', count: 20}, (err, data, response) => {
//   // console.log(data.statuses[0].user.screen_name);

//   for(var i = 0; i < data.statuses.length; i++){
//     // console.log(data.statuses[i].text)
//     // tweet.text = data.statuses[i].text;
//     toneAnalyzer.tone({ 'text': tweet.text}, function (err, data) {
//       if (err)
//           console.log(err);
//       else
//           // for(var tone of data.document_tone.tones){
//           //   console.log(tone);
//           // }
//           console.log(data);
//           console.log(data.document_tone.tones);
//     });
//   }
  
// });

// param = {
//   "text": "Team, I know that times are tough! Product sales have been disappointing for the past three quarters. We have a competitive product, but we need to do a better job of selling it!"
// }

// toneAnalyzer.tone(param, function (err, data) {
//   if (err)
//       console.log(err);
//   else
//   console.log(data)
//       for(var tone of data.document_tone.tones){
//         console.log(tone);
//       }
// });