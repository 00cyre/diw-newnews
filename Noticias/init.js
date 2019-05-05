var
  ssl = true,
  express = require('express'),
  app = express()

  app.use('/res', express.static(__dirname+ '/static_res'))
  app.get('/', function (req, res) {
    res.sendFile(__dirname + req.path); 
  });
  
  app.listen(process.env.PORT || 3000,"0.0.0.0", function () {
    console.log('Example app listening on port 3000!');
  });