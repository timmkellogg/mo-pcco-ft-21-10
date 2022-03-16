import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
})

UserSchema.pre('save', function (next) {
    const user = this;


    if (user.isModified('password') || user.isNew) {
        bcrypt.genSalt(10, function (saltError, salt) {
            if (saltError) {
                return next(saltError);
            } else {
                bcrypt.hash(user.password, salt, function (hashError, hash) {
                    if (hashError) {
                        return next(hashError);
                    }

                    user.password = hash;
                    return next();
                })
            }
        })
    } else {
        return next();
    }
})

export default mongoose.model('user', UserSchema);