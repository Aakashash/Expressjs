import express from "express";
import helmet from "helmet";

import log from "./log.js";
const app = express();

// Use Helmet!
//app.use(helmet());

app.get("/", (req, res) => {
  // res.send("Hello world!");
  log.Info('Hello from logger');
  res.cookie('test', 'the data is the value of cookie');
  res.send('Hello world');
});

app.listen(8000);