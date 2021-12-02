const mongoose = require("mongoose");

// step 1
const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/validations_express");
}

// ,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: true
// }

module.exports = connect;