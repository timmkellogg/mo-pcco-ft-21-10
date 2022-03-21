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
    Gif.findByIdAndUpdate(req.params.id, { url: req.body.url }, (err, result) => {
        if(err) {
            console.log(log);
            res.send('error')
        } else {
            console.log(result);
            res.send('success');
        }
    })
})

router.delete('/:id', (req, res) => {
    Gif.findByIdAndDelete(req.params.id, (err, result) => {
        if(err) {
            console.log(err);
            res.send('error');
        } else {
            console.log(result);
            res.send('success');
        }
    })
})

export default router;