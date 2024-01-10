const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    // name: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,

    },
    access: {
        type: String,
        default: 'none'
    },
    date: {
        type: String,
        default: Date.now
    }

});
UserSchema.pre('save', function (next) {
    if (this.isModified('email') || !this.name) {
        this.name = this.email.slice(0, 5).toLowerCase();
    }
    next();
});
const User = mongoose.model('user', UserSchema);
// User.createIndexes(); ...this will create indexes but we will write another logic for it

module.exports = User;