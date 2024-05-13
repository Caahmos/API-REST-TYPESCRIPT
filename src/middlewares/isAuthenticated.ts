import { Request, Response, NextFunction } from "express";
import { Payload } from "../models/interfaces/auth/Payload";
import { verify } from "jsonwebtoken";

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    let token = String(req.headers.authorization);

    if (!token) return res.status(401).json({ message: 'Token não encontrado!' })

    token = token.split(' ')[1];

    try {
        let { sub } = verify(token, process.env.JWT_SECRET as string) as Payload;
        req.user_id = sub;

        return next();
    }catch(err){
        res.status(401).json({ message: 'Token inválido!'})
    }
}