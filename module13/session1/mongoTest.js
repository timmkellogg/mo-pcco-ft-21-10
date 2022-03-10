import mongoose from 'mongoose';

mongoose.connect('YOURMONGOSTRINGGOESHERE');

const User = mongoose.model('User', { username: String });

const user = new User({ username: 'tim' });

user.save().then(() => {
    User.find((err, gifs) => {
        console.log(gifs)
    })
})

