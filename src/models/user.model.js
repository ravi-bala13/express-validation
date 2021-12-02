const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        first_name: {type: String, required: true},
        last_name: {type: String, required: true},
        email: {type: String, required: true},
        pincode: {type: Number, required: true},
        age: {type: Number, required: true},
        gender: {type: String, required: true},
    },
    {
        versionKey: false,
        timestamps: true
    }
);

// Create a user model with following fields
// first_name,
// last_name,
// email,
// pincode,
// age,
// gende

module.exports = mongoose.model("user", userSchema);