const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/scatch")

const userSchema=mongoose.Schema({
      fullname: String,
      email: String,
      password: String,

      cart: {
        type: Array,
        default: []
      },

      isAdmin: Boolean,

      orders:{
        type: Array,
        default: []
      },
      
      contact: Number

})
const User = mongoose.model('User', userSchema);

module.exports = User;
