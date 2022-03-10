import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://admin:timpass@cluster0.izinz.mongodb.net/GiphyApp?retryWrites=true&w=majority');

const User = mongoose.model('User', { username: String });

const user = new User({ username: 'tim' });

user.save().then(() => {
    User.find((err, gifs) => {
        console.log(gifs)
    })
})

