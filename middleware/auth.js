const jwt = require('jsonwebtoken');
const User = require('../controllers/user');

exports.authenticate = (request, response, next) => {
    try{
        const token = request.header('Athorization');
        const user = jwt.verify(token, process.env.TOKEN_SECRET);

        User.findbypk(user.userId).then(user => {
            request.user = user;
            next()
        })
        .catch((err) => err, 'error while access request.user' )

    }
    catch{
        console.log('error during authetication')
    }

}

