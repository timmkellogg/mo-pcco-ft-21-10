import express from 'express';

const app = express();
const port = 3001;

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

app.get('/test', (req, res) => {
    res.send('Hello world');
});

app.get('/items', (req, res) => {
    res.send(db.items);
});

app.get('/users', (req, res) => {
    res.send(db.users);
});

app.get('/users/create/:username/:password', (req, res) => {
    db.users.push({
        username: req.params.username,
        password: req.params.password
    })
    res.send('users added')
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})