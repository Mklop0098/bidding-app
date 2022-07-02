import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { AppRoute } from "./src/routes";
import { AppConfig } from './src/configs';
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

AppConfig(app);
AppRoute(app);

// connect mongodb
mongoose.connect('mongodb+srv://bidding:rqxgpPqM88eWKN2@cluster0.dae50.mongodb.net/bidding?retryWrites=true&w=majority', (err) => {
  if (err) {
    console.log(err.message);
  }
  else {
    console.log("Mongo connected")
  }
});



app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


