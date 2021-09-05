const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const ItemModel = require("../../models/items");
const orderModel = require("../../models/orders");

const password = "Ab123456";
const url = `mongodb+srv://amitbar:Ab123456@cluster0.oilok.mongodb.net/kipodimDB?retryWrites=true&w=majority`;

mongoose.Promise = global.Promise;

mongoose.connect(url);

mongoose.connection
  .once("open", () => {
    console.log("Connection has benn made , now make fireworks...");
  })
  .on("error", () => {
    console.log("connection ###############error");
  })

const app = express();
app.use(cors());

const port = process.env.PORT || 3001;


app.get("/api/orders/:id", async (req, res) => {
  const orders = await orderModel.find({ _id: req.params.id });
  res.send(orders);
});

app.get("/api/orders", async (req, res) => {
  const { filterText, status } = req.query;
  const orders = await orderModel.find({});
  console.log(orders);
  const filterOrders = orders.filter((order) => {
    return (
      (!status || order.status === status) &&
      (!filterText ||
        order.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
        order.lastName.toLowerCase().includes(filterText.toLowerCase()))
    );
  });

  res.send(filterOrders);
});

app.post("/api/orders", async (req, res) => {
  const id = req.body.result.id;
  delete req.body.result.id;
  const status = req.body.result.status;
  delete req.body.result.status;

  console.log("iddddddd " + id);
  console.log("statusssss " + status);

  await orderModel.findOneAndUpdate(
    { _id: "61329496894c9c44bb3dd258" },
    { status: "closed" },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    }
  );

  res.send();
});

// app.get("/api/closedOrders", async (req, res) => {
//   const orders = await orderModel.find({ status: "closed" });
//   res.send(orders);
// });

// app.get("/api/openOrders", async (req, res) => {
//   const orders = await orderModel.find({ status: "open" });
//   res.send(orders);
// });

app.post("/api/updateStatusOrderById/:id", async (req, res) => {
  const orders = await orderModel.find({ status: "open" });
  res.send(orders);
});

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

app.get("/api/jewelry", (req, res) => {
  res.send(jewelrysArr);
});

app.get("/api/plates", (req, res) => {
  res.send(platesArr);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
