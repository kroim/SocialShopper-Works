const ApiController  = require('./ApiController');

class UserController extends ApiController{
    constructor(req, res) {
        super(req, res);
    }
    list(){
        this.success('list respond with a resource');
    }
    create(){
        this.success('create respond with a resource');
    }
}

module.exports = UserController;