var Product = require('../models/product');
var mongoose  = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopping')

var products = [
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'cs go',
    description: 'addictive game',
    price: 10
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'battlefield 4',
    description: 'addictive game',
    price: 10
  })
]

var done = 0;
for(var i=0; i < products.length; i++) {
  products[i].save(function(err, result)  {
    done++;
    if(done === process.length) {
      exit()
    }
  })
}

function exit() {
  mongoose.disconnect()
}
