var express = require('express');
 
var app = express();
 
app.get('/', function(req, res) {
    res.send([{name:'wine1'}, {name:'wine2'}]);
});

app.get('/wines/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});
 
var listener = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});