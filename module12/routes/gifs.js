import express from 'express';
import path from 'path';
import { Low, JSONFile } from 'lowdb';
import { v4 as uuidv4 } from 'uuid';

const file = path.join(path.resolve(), 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

await db.read();

if(!db.data) db.data = { gifs: [] };

const router = express.Router();

router.get('/', (req, res) => {
    res.send(db.data.gifs);
})

router.post('/', (req, res) => {
    db.data.gifs.push({ id: uuidv4(), url: req.body.url });
    db.write();
    res.send('added');
})

router.put('/:id', (req, res) => {
    const itemToUpdate = db.data.gifs.find(gif => gif.id === req.params.id);
    itemToUpdate.url = req.body.url;
    db.write();
    res.send('updated');
})

router.delete('/:id', (req, res) => {
    db.data.gifs = db.data.gifs.filter(gif => gif.id !== req.params.id);
    db.write();
    res.send('deleted')
})

export default router;