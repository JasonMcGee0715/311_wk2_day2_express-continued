const comments = require('../data/comments');
const commentsCount = comments.length;

const list = (req, res) => {
    res.json(comments);
}

const show = (req, res) => {
    const id = req.params.commentId;

    const foundComment = comments.find(comment => comment._id === Number(id));
    console.log(foundComment);
    res.json(foundComment);
}

const create = (req, res) => {
    const newComment = {
        _id: commentsCount + 1,
        ...req.body
    }
    if (!newComment._id || !newComment.body || !newComment.postId) {
        return res.status(400).json({ msg: `Please include a body and postId.  Make sure entry includes no spaces.`})
    }
    comments.push(newComment)
    res.json(comments);
}

module.exports = {
    list, 
    show, 
    create
}