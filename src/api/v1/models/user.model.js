const mongoose = require('mongoose')

const Schema = mongoose.Schema()

const UserSchema = new Schema({
    user_name : {
        type : String,
        required : true,
        unique : true
    },
    user_email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    password: {
        type : String,
        required : true
    },
    isAdmin : {
        type : Boolean,
        required : true
    }
})


module.exports = mongoose.model('Users',UserSchema)