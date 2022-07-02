import express, { Express } from "express"
import passport from "./middlewares/passport";
import cors from "cors";

export const AppConfig = (app: Express) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(passport.initialize());
    app.use(cors());
}