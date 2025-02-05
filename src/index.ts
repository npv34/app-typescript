import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "@routers/web.router";
import "reflect-metadata";
import { AppDataSource } from "./database/data-source";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;


app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");

// configure bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

app.use(router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});