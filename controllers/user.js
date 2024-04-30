const User = require('../models/users');
const bcrypt = require('bcrypt');

function isstringinvalid(string) {
    if (string == undefined || string.length == 0) {
        return true
    } else {
        return false
    }
}

exports.signup = async (request, response, next) => {
    try{
        const {name, email, password, phonenumber} = req.body;
        if (isstringinvalid(name) || isstringinvalid(email) || isstringinvalid(password) || isstringinvalid(phonenumber)) {
            return res.status(400).json({ err: "bad parameter. something is missing" })
        }
        const saltround = 10;
        bcrypt.hash(password, saltround, async(err, hash) => {
            console.log(err)
            await User.create({name, email, password:hash, phonenumber})
            response.status(200).json({message: 'successfully create new user' })
        })
    }
    catch(err){
        console.log(err)
        response.status(500).json('failed to create user')
     }
}

function generateAccessToken(id, name){
    return jwt.sign({id, name}, process.env.TOKEN_SECRETE_KEY)

}

exports.login = async (request, response) => {
    try {
        const { email, password } = request.body;
        if (isstringinvalid(email) || isstringinvalid(password)) {
            return res.status(400).json({ message: 'Email id or password missing', success: false })
        }
        const user = await User.findAll({ where: { email } })
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, (err, result) => {
                if (err) {
                    res.status(500).json({ success: false, message: 'Something wend wrong' })
                }
                if (result == true) {
                    res.status(200).json({ success: true, message: "user logged in successfully", token: generateAccessToken(user[0].id, user[0].name, user[0].ispremiumuser) })
                }
                else {
                    return res.status(400).json({ success: false, message: 'password is incorrect' })
                }
            })
        } else {
            return res.status(404).json({ success: false, message: 'user doesnot exitst' })
        }
    } catch (err) {
        res.status(500).json({ message: err, success: false })
    }
}


        


