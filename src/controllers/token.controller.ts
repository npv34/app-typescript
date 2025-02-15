import TokenService from "@services/token.service";

class TokenController {
    static async index(req: any, res: any): Promise<any> {
        const myToken = await TokenService.getAllTokens(req, res);
        res.render('token/list', { tokens: myToken });
    }

    static async store(req: any, res: any): Promise<any> {
        await TokenService.createToken(req.body, req);
        req.flash('success', 'Create token success!!'); 
        res.redirect('/api-keys');
    }

    static async deleteToken(req: any, res: any): Promise<any> {
        const {id} = req.params;
        await TokenService.delete(parseInt(id));
        req.flash('success', 'Delete token success!!'); 
        res.redirect('/api-keys');
    }
}

export default TokenController;