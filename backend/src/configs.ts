import express, { Express } from "express"
import passport from "./middlewares/passport";

export const AppConfig = (app: Express) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(passport.initialize());
}