const mongoose = require('mongoose')


// Cree un modal pour utliser
const studentModel = new mongoose.Schema({
    name: { type: String, unique: true, index: true },
    age: Number,
    class: String,
    level: String,
    gender: String,
    mark: String,
    subjects :[{type: mongoose.Types.ObjectId , ref: 'subject'}]

});
