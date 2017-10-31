module.exports = function(application, req, res){
  application.get('/', (req, res)=>{
    res.render('index');
  })
};