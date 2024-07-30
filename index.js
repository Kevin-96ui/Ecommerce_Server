const express = require("express");
const app = express();
const mongoose = require('mongoose');
const userRouter = require("./Routes/user.routes.js");
const productRouter = require("./Routes/product.routes.js");
const cors = require('cors');

app.use(express.json())

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use("/user", userRouter);
app.use("/product", productRouter);

mongoose.connect("mongodb+srv://kevin:kevin@cluster0.59ty8kk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("DB connected for E-commerce");
    app.listen(5000, () => {
      console.log('Server started on port 5000');
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => {
  console.log("Node is running");
  res.send("5000 port");
});

//kevinmathew365
//N67wHqraG0ckQvjO