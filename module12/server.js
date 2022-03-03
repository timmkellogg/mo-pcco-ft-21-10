import express from 'express';
import authRouter from './routes/auth.js';
import gifRouter from './routes/gifs.js';
import path from 'path';

import authenticateJWT from './middleware/authenticateJWT.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }))


app.use('/auth', authRouter);
app.use('/gifs', authenticateJWT, gifRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'index.html'));
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})