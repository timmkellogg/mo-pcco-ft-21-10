import express from 'express';

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: false }))

const db = {
    items: [{
        item: 'carrots',
        cost: 15
    },
    {
        item: 'lettuce',
        cost: 10
    },
    {
        item: 'tomatoes',
        cost: 5
    }],
    users: [
        {
            username: 'tim',
            password: 'redacted'
        }
    ]
};

app.get('/', (req, res) => {
    res.send('<html><body><form></form></body></html>');
});

app.get('/portfolio', (req, res) => {
    res.send('<html><body>Portfolio Page</body></html>');
});

app.get('/items', (req, res) => {
    res.json(db.items);
});

app.get('/users/create/:username/:password', (req, res) => {
    db.users.push({
        username: req.params.username,
        password: req.params.password
    })
    res.send('users added')
});

app.get('/users', (req, res) => {
    res.json(db.users);
});

app.post('/users', (req, res) => {
    res.json(req.body);
})

//CRUD
//GET - READ, no body
//POST - CREATE send body
//PUT - UPDATE or CREATE (if none) send body
//PATCH - UPDATE send body
//DELETE - DELETE body optional ?

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})