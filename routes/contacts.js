const express = require('express');
const router = express.Router()

const contactsController = require('../controllers/contacts');

router.get("/contacts", contactsController.list);
router.get("/contacts/:contactId", contactsController.show);
router.post("/contacts", contactsController.create);

module.exports = router;