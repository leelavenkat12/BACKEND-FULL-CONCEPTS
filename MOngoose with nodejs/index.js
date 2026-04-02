const mongoose = require('mongoose');

// Use ONE connection (Atlas OR local)
const uri = "mongodb+srv://venkatleela95_db_user:Leelavenkat%4012@cluster0.xk1ktkn.mongodb.net/shop";

mongoose.connect(uri)
  .then(() => console.log("Connected"))
  .catch(err => console.log(err));

const ProductSchema = new mongoose.Schema({
    name: String,
    company: String,
    price: Number,
    colors: [String],
    image: String,
    category: String,   // fixed
    isFeatured: Boolean
});

const Product = mongoose.model('Product', ProductSchema);

const data1 = {
    name: "Designer Handbag2",
    company: '64c23350ew32f4a51b19b9231',
    price: 2466,
    colors: ['#333333', '#cccccc', '#00ff00'],
    image: '/images/product-laptop.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: true
};

const main = async () => {
    try {
        await Product.insertMany(data1); // fixed
        
        const updateQuerry = await Product.findOneAndUpdate(
            {name:"Designerhandling2",price:2466},{$set:{price:2499}}
            
        )
        const data = await Product.find({ price: { $eq: 2499 } });
        console.log(data);
}
     catch (err) {
        console.log(err); // important
    } finally {
        mongoose.connection.close();
    }
};

main();