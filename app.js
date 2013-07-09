var express = require('express')
  , http = require('http');

var app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.logger('dev'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});