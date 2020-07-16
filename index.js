const express = require("express");
const bodyParser = require("body-parser");
const comments = require('./data/comments');
const contacts = require('./data/contacts');
const vehicles = require('./data/vehicles');
const products = require('./data/products');

const contactsCount = contacts.length;


const app = express();
const port = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/contacts', (req, res) => {
    res.json(contacts);
})



app.get('/contacts/:contactId', (req, res) => {
    const id = req.params.contactId;

    const foundContact = contacts.find(contact => contact._id === Number(id))
    console.log(foundContact);

    res.json(foundContact)
})




app.post('/contacts', (req, res) => {
    console.log(req.body);
    contacts.push({
            _id: contactsCount + 1,
            ...req.body
            // name: req.body.name,
            // occupation: req.body.occupation,
            // avatar: req.body.avatar
        }
    )
    
})







app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
