import { Request, Response } from "express";
class HomeController {
    public static index(req: Request, res: Response): void {
        res.send('Hello, World!');
    }
}

export default HomeController;