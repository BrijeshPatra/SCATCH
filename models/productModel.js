const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/scatch")

const productSchema=mongoose.Schema({
      name: String,
      price: Number,
      discount: {
        type: Number,
        default: 0
      },
      bgcolour: String,
      panelcolor: String,
      textcolor: String

})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;