import express from 'express';
import Gif from '../models/Gif.js';

const router = express.Router();

router.get('/', (req, res) => {
    Gif.find({ user: req.user.id }, (err, gifs) => {
        if (err) {
            console.log(err);
            res.send('error');
        } else {
            res.send(gifs);
        }
    })
})

router.post('/', (req, res) => {
    console.log(req.user)
    Gif.create({ url: req.body.url, user: req.user.id }, (err, gif) => {
        if (err) {
            console.log(err);
            res.send('error');
        } else {
            res.send('success');
        }
    })
})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

export default router;