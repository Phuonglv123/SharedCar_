const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    fullname:{
        type: String,
        required: true
    },
    accountType:{
        type: Number, // 1 driver, 2: passenger
        required: true,
        // default: 2
    },
    phone:{
      type: String,
      required: true
    },
    isActive:{
      type: Boolean,
      required: true
    }
})

module.exports = user = mongoose.model('user',UserSchema);