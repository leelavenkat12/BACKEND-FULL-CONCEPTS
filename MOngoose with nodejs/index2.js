const mongoose = require("mongoose")
const uri = "mongodb+srv://venkatleela95_db_user:Leelavenkat%4012@cluster0.xk1ktkn.mongodb.net/shop";
mongoose.connect(uri)

const ProductSchema = ({
 name: String,
    company: String,
    price: Number,
    colors: [String],
    image: String,
    category: String,   // fixed
    isFeatured: Boolean    
})
const data1 = {
    name: "Designer Handbag4",
    company: '64c23350ew32f4a51b19b9231',
    price: 2766,
    colors: ['#333333', '#cccccc', '#00ff00'],
    image: '/images/product-laptop.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: true
}
const Product = mongoose.model('Product',ProductSchema)
const main=async()=>{
    await Product.insertMany(data1)
    const data = await Product.find({price:{$eq:2766}});
    console.log(data);

    
}
main().catch((e)=>{
    console.log(e);
    
})