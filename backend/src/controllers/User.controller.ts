import { Request, Response } from "express";
import { User } from "../models/User";
import bcript from "bcrypt";
import jwt from "jsonwebtoken";


export const register = async (req: Request, res: Response) => {
    const { username } = req.body;

    if (!username) return res.status(400).json({
        code: 1,
        message: "Missing information"
    })

    const existedUser = await User.find({ username: username });
    if (existedUser.length) {
        return res.status(400).json({
            code: 2,
            message: "User already exists"
        })
    }

    const password = await bcript.hash(req.body.password, 10);

    const user = new User({
        ...req.body,
        password
    })

    const savedUser = await user.save();

    const payload = {
        id: savedUser._id,
        name: savedUser.name,
        phone: savedUser.phone,
        address: savedUser.address,
        username: savedUser.username
    }

    res.status(201).json({
        code: "0",
        data: {
            ...payload,
            token: createToken(payload, process.env.TOKEN_SIGN || "")
        }
    });
}

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ code: 1, message: "Missing information" })
    }

    const detectedUser = await User.findOne({ username })

    if (!detectedUser) {
        return res.status(404).json({
            code: -1,
            message: "Not found"
        })
    }

    const isValidPassword = await bcript.compare(password, detectedUser.password!);

    if (isValidPassword) {
        const payload = {
            id: detectedUser._id,
            name: detectedUser.name,
            phone: detectedUser.phone,
            address: detectedUser.address,
            username: detectedUser.username
        }
        return res.status(200).json({ code: 0, token: createToken(payload, process.env.TOKEN_SIGN || 'bidding') })
    }
    return res.status(401).json({ code: -1, message: "Username or password is incorrect" })
}


const createToken = (payload: any, sign: string) => {
    return jwt.sign(payload, sign, {
        expiresIn: 24 * 60 * 60 // 1 day
    });
}