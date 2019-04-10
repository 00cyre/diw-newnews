var
  ssl = true,
  express = require('express'),
  app = express()


  app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html'); 
  });
  
  app.listen(process.env.PORT || 3000,"0.0.0.0", function () {
    console.log('Example app listening on port 3000!');
  });