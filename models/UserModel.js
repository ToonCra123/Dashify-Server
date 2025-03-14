const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    playlists: {
        type: Array,
        default: [],
        require: false
    },
    profilePicture: {
        type: String,
        default: 'default.jpg',
        require: false
    }
});

module.exports = mongoose.model('User', userSchema);