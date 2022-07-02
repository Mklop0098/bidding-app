import { Express, Request, Response } from "express"
import { User } from "./models/User"
import * as userController from "./controllers/User.controller"
import passport from "./middlewares/passport"
import { UnAuthorized } from "./error-handler"

export const AppRoute = (app: Express) => {
    const apiVersion = 'v1'

    app.get('/', (req: Request, res: Response) => {
        res.status(200).json()
    });

    app.post(`/api/${apiVersion}/register`, userController.register)
    app.post(`/api/${apiVersion}/login`, userController.login)
    app.get('/api/v1/user', passport.authenticate('jwt', { session: false }), userController.getInfo)
    app.get("/api/v1/test", passport.authenticate('jwt', { session: false }), (req, res) => {
        if (!req.user) return UnAuthorized(res);
        return res.status(200).json({ code: "ok" })
    })
}