const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type: String,
        required:true
    },
    wishlist: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Listing'
}]

});

userSchema.plugin(passportLocalMongoose);// username , hash , salt sb apneaap build kr dega

module.exports = mongoose.model('User', userSchema);