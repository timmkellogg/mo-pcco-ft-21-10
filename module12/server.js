import express from 'express';
import path from 'path';
import { Low, JSONFile } from 'lowdb';

const file = path.join(path.resolve(), 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

await db.read();

if(!db.data) db.data = { gifs: [] };

console.log(db.data);

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }))

app.get('/gifs', (req, res) => {
    res.send(db.data.gifs);
})

app.post('/gifs', (req, res) => {
    db.data.gifs.push({ url: req.body.url });
    db.write();
    res.send('success');
})

// app.put('/gifs')

// app.delete('/gifs')

app.get('*', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'index.html'));
});





//CRUD
//GET - READ, no body
//POST - CREATE send body
//PUT - UPDATE or CREATE (if none) send body
//PATCH - UPDATE send body
//DELETE - DELETE body optional ?

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})