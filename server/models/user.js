const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    phone: String,
    password: String,
    token: String,
    createdAt: Number,
    updatedAt: Number
}, { collection: 'users' });

module.exports = mongoose.model('User', userSchema);