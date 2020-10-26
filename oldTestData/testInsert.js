var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("logAdmin");
  var myobj = [{ keyword: 'ruby', 
    searchBy: 'language', 
    url:'https://api.github.com/search/repositories?q=language:html',
    status:true,
    executionTime:3000,
    dateExecuted:Date.now()},
    {keyword: 'ruby', 
    searchBy: 'language', 
    url:'https://api.github.com/search/repositories?q=topic:ruby',
    status:true,
    executionTime:3000,
    dateExecuted:Date.now()}];
    dbo.collection("log").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
      });
});

//
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});