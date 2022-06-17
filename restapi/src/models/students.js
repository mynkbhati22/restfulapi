const mongoose = require("mongoose");
const validator = require("validator");

const studentScehma = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
    },

    email: {
        type: String,
        required: true,
        unique: [true, "Email is already exsit"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is not valid")
            }
        },
    },

    phone : {
        type: Number,
        minlength:10,
        required: true,
        unique:true,
    },

    address : {
        type: String,
        required: true,
    }
})

// creating a new connection

const Student = new mongoose.model('Student', studentScehma);

module.exports = Student;