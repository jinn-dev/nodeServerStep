//server start
var express = require('express');
var app = express();
app.listen(3000, function(){
    console.log("start! express server on port 3000");
});

for(var i = 0; i < 100; i++) {
  console.log('end of server code');
}

app.get('/', function(req, res) {
  res.send("<h1>hi friend</h1>");
  res.sendFile(__dirname + "/public/main.html");
});
