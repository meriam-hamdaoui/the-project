//third-party requirement
require("dotenv").config();
const express = require("express");
const cors = require("cors");

//local packages
const connectDB = require("./config/connectDB");
const parentRouter = require("./routes/parent");

//initiate server
const app = express();

app.use(express.json());
app.use(cors());

//connect to DB
connectDB();

//get the app to use routers
app.use("/farah", parentRouter);

const PORT = process.env.PORT || process.env.port;
app.listen(PORT, (err) =>
  err
    ? console.error(`server ERROR => ${err}`)
    : console.log(`go to localhost:${PORT}`)
);
