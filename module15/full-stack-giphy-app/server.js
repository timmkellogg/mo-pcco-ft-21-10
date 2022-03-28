import 'dotenv/config';
import express from 'express';
import { URL } from 'url';
import mongoose from 'mongoose';

import authenticateJWT from './middleware/authenticateJWT.js';

mongoose.connect(process.env.MONGO_URL);

import authRouter from './routes/auth.js';
import gifRouter from './routes/gifs.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use('/auth', authRouter);
app.use('/gifs', authenticateJWT, gifRouter);

app.use(express.static(new URL('./client/build', import.meta.url).pathname))
app.get('*', (req, res) => {
    res.sendFile(new URL('./client/build/index.html', import.meta.url).pathname)
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})