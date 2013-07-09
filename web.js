var express = require('express'),
    fs = require('fs'),
    http = require('http');

var app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.logger('dev'));

var contents = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send( contents.toString('utf-8') );
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});