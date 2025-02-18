import TokenService from "@services/token.service";

class TokenController {
    static async index(req: any, res: any): Promise<any> {
        res.render('token/list');
    }

    static async getAllTokens(req: any, res: any): Promise<any> {
        const myToken = await TokenService.getAllTokens(req, res);
        return res.json({
            message: "success",
            data: myToken
        })
    }

    static async store(req: any, res: any): Promise<any> {
        await TokenService.createToken(req.body, req);
        req.flash('success', 'Create token success!!'); 
        res.json({
            status: "success", 
            message: "Create token success",
        })
    }

    static async deleteToken(req: any, res: any): Promise<any> {
        const {id} = req.params;
        await TokenService.delete(parseInt(id));
        req.flash('success', 'Delete token success!!'); 
        res.json({
            status: "success", 
            message: "Delete token success",
        })
    }
}

export default TokenController;