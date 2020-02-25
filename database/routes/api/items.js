let express = require('express');
let router = express.Router();
let Item = require('../../modal/item');
// @route   GET api/items
// @desc   GET all items
// @access   Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})
// @route Post api/items
// @desc Add items
// @access Private
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
        .then(item => res.json(item))
})
// @route DELETE api/items/:id
// @desc delete the item
// @access Private
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})
module.exports = router