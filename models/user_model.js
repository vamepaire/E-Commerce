const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    User_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required:true
    },
    cart: {
        type: Array,
        default:[]
    },
    isAdmin: {
        type: Boolean,
    },
    orders: {
        type: Array,
        default:[]
    },
    contact_no: {
        type: Number,
        required: true,
    },
    image: {
        type:String
    }
});

module.exports  = mongoose.model("User_Model", UserSchema);