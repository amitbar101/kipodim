var MongoClient = require("mongodb").MongoClient;
const express = require("express");
var cors = require("cors");

const jewelrysArr = [
  {
    name: "עגילים",
    price: 12,
    imgURL: "j1.jpg",
  },
  {
    name: "שרשרת",
    price: 25,
    imgURL: "j2.jpg",
  },
  {
    name: "מתקן טבעות",
    price: 23,
    imgURL: "j3.jpg",
  },
];


const platesArr = [
  {
    name: "צלחת1",
    price: 12,
    imgURL: "j1.jpg",
  },
  {
    name: "צלחת2",
    price: 25,
    imgURL: "j2.jpg",
  },
  {
    name: "צלחת3",
    price: 23,
    imgURL: "j3.jpg",
  },
];

const app = express();
app.use(cors());

const port = process.env.PORT || 3001;

const password = "Ab123456";
var url = `mongodb+srv://amitbar:${password}@cluster0.oilok.mongodb.net/kipodim?retryWrites=true&w=majority`;

app.get("/api/jewelry", (req, res) => {
  res.send(jewelrysArr);
});

app.get("/api/plates", (req, res) => {
  res.send(platesArr);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
