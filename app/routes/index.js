module.exports = function(application, req, res){
  application.get('/', (req, res)=>{
    res.render('index');
  });

  application.get('/tone-analyzer', (req, res) =>{
    application.app.controllers.toneAnalyzer.index(application, req, res);
  });
  
  application.post('/tone-analyzer', (req, res)=>{
    application.app.controllers.toneAnalyzer.analyze(application, req, res);
  });

  application.get('/translator', (req, res) =>{
    application.app.controllers.translator.translator(application, req, res);
  });

  application.post('/translator', (req, res) =>{
    application.app.controllers.translator.translate(application, req, res);
  });

  application.get('/twitter', (req, res)=>{
    application.app.controllers.twitter.index(application, req, res);
  });

  application.post('/twitter', (req, res)=>{
    console.log(req.body)
    if(req.body.acao == 'postar'){
      application.app.controllers.twitter.postar(application, req, res);
    } else if(req.body.acao == 'listar'){
      application.app.controllers.twitter.listar(application, req, res);
    }
  });

  application.get('/tone-twitter', (req, res)=>{
    application.app.controllers.integration.index(application, req, res);
  });

  application.post('/tone-twitter', (req, res)=>{
    application.app.controllers.integration.analyze(application, req, res);
  });
};