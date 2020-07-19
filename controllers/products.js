const products = require('../data/products');
const productsCount = products.length;

const list = (req, res) => {
    res.json(products);
};

const show = (req, res) => {
    const id = req.params.productId;

    const foundProduct = products.find(product => product._id === Number(id));
    console.log(foundProduct);
    res.json(foundProduct);
};

const create = (req, res) => {
    const newProduct = {
        _id: productsCount + 1,
        ...req.body
    }
    if (!newProduct._id || !newProduct.name || !newProduct.description || !newProduct.rating || !newProduct.imgUrl || !newProduct.price || !newProduct.category || !newProduct.reviews) {
        return res.status(400).json({ msg: `Please include a name, description, rating, imgUrl, price, category, and a review`})
    }
    products.push(newProduct);
    res.json(products);
};

module.exports = {
    list, 
    show, 
    create
}