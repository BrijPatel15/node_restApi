// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//     res.send('Hello World!')
// });

// app.listen(3000, function(){
//     console.log('Listening on port 3000!');
// });

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("testDb");
    // dbo.createCollection("test", function(err, res){
    //     if(err) throw err;
    //     console.log("Collection created");
    //     db.close();
    // });
    var myObj = {id:"myId", title: "Hello"};
    dbo.collection("testDb").insertOne(myObj, function(err, res){
        if(err) throw err;
        console.log("object " + myObj + "added to " + dbo.collection("test").collectionName);
        db.close();
    });
});