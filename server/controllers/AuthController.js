const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {User} = require("../models");

const SCECRET_KEY = '5gmall-secret-key';

const AuthController = {
    call: function(action){
        switch (action) {
            case 'login':
                return this.login;
            case 'register':
                return this.register;
            default:
                return function(req, res){
                    res.json({'success': false, 'error_message': 'Action not found'})
                }
        }
    },
    login: function(req, res){
        const { email, password } = req.params;
        let user = await User.findOne({ name: args.name });
        if(!user){
            return null;
        }
        let passwordIsValid =  bcrypt.compareSync(args.password, user.password);

        if(!passwordIsValid){
            return res.json({ success: false, error_message: "Invalid Password!" };
        }

        return res.json({ success: true, data: user });
    },
    register: async function(req, res){
        const { email, phone, password } = req.body;
        if(!email || !phone || !password){
            res.json({ success: false, error_message: 'Invalid params'});
        }
        let token = jwt.sign({ email: email }, SCECRET_KEY, {
            expiresIn: 86400 // 24 hours
        });
        const salt = bcrypt.genSaltSync(10);
        const now = Date.now();

        try{
            let user = new User({
                email: email,
                phone: phone,
                password: bcrypt.hashSync(password, salt),
                token: token,
                createdAt: now,
                updatedAt: now
            });
            await user.save();
        } catch (e) {
            res.json({ success: false, error_message: 'Registering is Failed' });
        }

        res.json({ success: true, data: {} });
    }
}

module.exports = AuthController;