import { Response } from "express";

export const UnAuthorized = (res: Response) => {
    return res.status(401).json({
        code: -1,
        message: "Unauthorized"
    })
}