const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    profilePicture:{
        type: String,
        default: ''
    },
    name:{
        type: String,
        default: ''
    },
    email:{
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;