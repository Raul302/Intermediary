const express = require('express');
const router = express.Router();
const Users = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const moment = require('moment');

router.get('/',async (req,res) => {
    const users = await Users.getAll();
    res.json(users);
});

// Ruta Register
router.post('/register', async (req,res) => {
    console.log('req',req.query);
    req.query.password = bcrypt.hashSync(req.query.password,10);
    const result = await Users.insert(req.query);
    res.json(result);
})

router.post('/login',async (req,res) => {
    const user = await Users.getByUsername(req.query.username)
    if(user === undefined){
        res.json({
            error:'Error,Usuario ó contraseña no validas'
        })
    } else {
        const equals = bcrypt.compareSync(req.query.password,user.password);
        if(!equals){
            res.json({
                error:'Error,Usuario ó contraseña no validas'
            });
        } else {
            res.json({
                succesfull: createToken(user),
                done:'Logueado correctamente'
            });
        }
    }
})
// Crear Token 
const createToken = (user) => {
    let payload = {
        userId:user.id,
        createdAt: moment().unix(),
        expireAt:  moment().add(1,'day').unix()
    }
    return jwt.encode(payload,process.env.TOKEN_KEY);
}

// router.use(middleware.checkToken)
module.exports = router;