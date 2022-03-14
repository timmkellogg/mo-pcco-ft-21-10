import express from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';

const accessTokenSecret = 'somerandomaccesstoken';

const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username: username }, (err, user) => {
        if(err || !user) {
            res.status(401).json('user does not exist');
        } else {
            if(user.password === password) {
                const accessToken = jwt.sign(
                    { username: user.username, id: user._id }, //token
                    accessTokenSecret, // secret used to sign token
                    { expiresIn: '120m' } //token details
                )
        
                res.json(accessToken);
            } else {
                res.send('invalid password')
            }
        }
    })
})

router.post('/signup', (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username: username}, (err, user) => {
        if(user) {
            res.status(500).send('user exists');
        } else {
            //do some stuff to hash a password
            
            User.create({
                username: username,
                password: password
            }, (userErr, user) => {
                if (userErr) {
                    console.log(userErr);
                    res.status(500).send('error')
                } else {
                    res.send('success')
                }
            })

           
        }
    })
})

router.post('/logout', (req, res) => {

})

export default router;