var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path=require('path');
var port = 8181;

server.use(cookieParser());
server.use(bodyParser.urlencoded({extended: true,limit: '5mb'}));
server.use(bodyParser.json({limit: '5mb'}));
server.use(bodyParser.text({limit: '5mb'}));
server.use('/', express.static('public'));

server.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/pages/login.html' ));

});

server.listen(port, function (err) {
    if(err){
        console.log("listen port err= ", err);
    }
    console.log("listen on port=", port);
});

//process.on("uncaughtException", function(err){
//    log.error(err);
//    console.log("uncaughtException=",err);
//});
