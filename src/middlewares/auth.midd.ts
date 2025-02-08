import { NextFunction, Response } from "express"

export const checkAuth = (req: any, res: Response, next: NextFunction) => {
    const {userLogin} = req.session;
    if (!userLogin) {
        res.redirect('/login');
        return;
    }
    next();
}