import express from 'express';
import jwt from 'jsonwebtoken';

const accessTokenSecret = 'somerandomaccesstoken';

const router = express.Router();

const users = [
    {
        id: 1,
        username: 'tim',
        password: 'timpass'
    }
];

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const accessToken = jwt.sign(
            { username: user.username, id: user.id }, //token
            accessTokenSecret, // secret used to sign token
            { expiresIn: '120m' } //token details
        )

        res.json(accessToken);
    } else {
        res.send('username or password invalid');
    }
})

router.post('/signup', (req, res) => {

})

router.post('/logout', (req, res) => {

})

export default router;