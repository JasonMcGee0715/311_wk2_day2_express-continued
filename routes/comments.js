const express = require('express');
const router = express.Router()

const commentsController = require('../controllers/comments');

router.get("/comments", commentsController.list);
router.get("/comments/:commentId", commentsController.show);
router.post("/commentId", commentsController.create);

module.exports = router;