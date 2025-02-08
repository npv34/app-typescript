import { Request, Response } from "express";
class HomeController {
    public static index(req: Request, res: Response): void {
        res.render('home');
    }
}

export default HomeController;