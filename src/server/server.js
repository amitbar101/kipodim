var MongoClient = require('mongodb').MongoClient;
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

const password = "Ab123456"
var url = `mongodb+srv://amitbar:${password}@cluster0.oilok.mongodb.net/kipodim?retryWrites=true&w=majority`;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var kipodimDB = db.db("kipodimDB");
  var myobj = { name: "Plate", price: 34 };
  kipodimDB.collection("items").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})