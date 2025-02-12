import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import router from "@routers/web.router";
import "reflect-metadata";
import { AppDataSource } from "./database/data-source";
import session from "express-session";
import apiRouter from "@routers/api.router";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");

// configure bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure session
app.use(session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: true,
    saveUninitialized: true
}));



app.use(function(req: any, res: any, next: NextFunction) {
    res.locals.userLogin = req.session.userLogin;
    next();
  });

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

app.use(router);
app.use("/api/v1", apiRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});