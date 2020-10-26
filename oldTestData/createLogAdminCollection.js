var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("logAdmin");
  dbo.createCollection("log", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});