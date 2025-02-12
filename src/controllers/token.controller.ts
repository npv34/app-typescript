import TokenService from "@services/token.service";

class TokenController {
    static async index(req: any, res: any): Promise<any> {
        const myToken = await TokenService.getAllTokens(req, res);
        console.log(myToken);
        res.render('token/list', { tokens: myToken });
    }

    static async store(req: any, res: any): Promise<any> {
        await TokenService.createToken(req.body, req);
        res.redirect('/api-keys');
    }
}

export default TokenController;