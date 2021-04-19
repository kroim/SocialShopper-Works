class ApiController{
    constructor(req, res) {
        this.req= req;
        this.res=res;
    }
    call(){
        const action = this.req.params.action;
        if(this[action]){
            return this[action]();
        }
        return this.error('Action not found');
    }
    success(data = {}){
        return this.res.json({success: true, data: data});
    }
    error(message = 'internal error'){
        return this.res.json({success: false, error_message: message});
    }
}

module.exports = ApiController;