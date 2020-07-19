const express = require("express");
const bodyParser = require("body-parser");
const comments = require('./data/comments');
const contacts = require('./data/contacts');
const vehicles = require('./data/vehicles');
const products = require('./data/products');

const contactsRoutes = require('./routes/contacts')
const commentsRoutes = require('./routes/comments')
const productsRoutes = require('./routes/products')
const vehiclesRoutes = require('./routes/vehicles')

// const contactsCount = contacts.length;
// const vehiclesCount = vehicles.length;
// const commentsCount = comments.length;
// const productsCount = products.length;


const app = express();
const port = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(contactsRoutes);
app.use(commentsRoutes);
// app.use(productsRoutes);
// app.use(vehiclesRoutes);




// //Basic GET Routes
// app.get('/contacts', (req, res) => {
//     res.json(contacts);
// })
app.get('/vehicles', (req, res) => {
    res.json(vehicles);
})
// app.get('/comments', (req, res) => {
//     res.json(comments);
// })
app.get('/products', (req, res) => {
    res.json(products);
})





//Dynamic GET Routes
// app.get('/contacts/:contactId', (req, res) => {
//     const id = req.params.contactId;

//     const foundContact = contacts.find(contact => contact._id === Number(id))
//     console.log(foundContact);

//     res.json(foundContact)
// })

app.get('/vehicles/:vehicleId', (req, res) => {
    const id = req.params.vehicleId;

    const foundVehicle = vehicles.find(vehicle => vehicle._id === Number(id));
    console.log(foundVehicle);
    res.json(foundVehicle);
})

// app.get('/comments/:commentId', (req, res) => {
//     const id = req.params.commentId;

//     const foundComment = comments.find(comment => comment._id === Number(id));
//     console.log(foundComment);
//     res.json(foundComment);
// })

app.get('/products/:productId', (req, res) => {
    const id = req.params.productId;

    const foundProduct = products.find(product => product._id === Number(id));
    console.log(foundProduct);
    res.json(foundProduct);
})





//POST Routes
// app.post('/contacts', (req, res) => {
//     console.log(req.body);
//     contacts.push({
//             _id: contactsCount + 1,
//             ...req.body
//             // name: req.body.name,
//             // occupation: req.body.occupation,
//             // avatar: req.body.avatar
//         })
//     res.json(contacts);
// })

app.post('/vehicles' , (req, res) => {
    const newV = {
        _id: vehiclesCount + 1,
        ...req.body
    }
    if (!newV._id || !newV.imgUrl || !newV.year || !newV.make || !newV.model || !newV.price || !newV.km || !newV.miles || !newV.fuel || !newV.city || !newV.isNew) {
        return res.status(400).json({ msg: `Please enter a imgUrl, year, make, model, price, km, miles, fuel, city, isNew. No spaces.`})
    }
    vehicles.push(newV);
    res.json(vehicles);
})

// app.post('/comments', (req, res) => {
//     const newComment = {
//         _id: commentsCount + 1,
//         ...req.body
//     }
//     if (!newComment._id || !newComment.body || !newComment.postId) {
//         return res.status(400).json({ msg: `Please include a body and postId.  Make sure entry includes no spaces.`})
//     }
//     comments.push(newComment)
//     res.json(comments);
// })

app.post('/products', (req, res) => {
    const newProduct = {
        _id: productsCount + 1,
        ...req.body
    }
    if (!newProduct._id || !newProduct.name || !newProduct.description || !newProduct.rating || !newProduct.imgUrl || !newProduct.price || !newProduct.category || !newProduct.reviews) {
        return res.status(400).json({ msg: `Please include a name, description, rating, imgUrl, price, category, and a review`})
    }
    products.push(newProduct);
    res.json(products);
})






app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
