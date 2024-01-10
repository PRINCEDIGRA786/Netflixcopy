// We will use router here.

const express = require('express')
const router = express.Router()
const List = require('../models/Listsmdoel')
const fetchuser = require('../Middleware/fetchUser')
const { body, validationResult } = require('express-validator');


//Route 1: Fetch the whole lists for todo
router.get('/fetchalllist', fetchuser, async (req, res) => {
    const list = await List.find({ user: req.user.id })
    res.json(list)
})


//Route 2: Add a new list using Post...Login required
router.post('/addlist', fetchuser, async (req, res) => {
    try {
        const { title, description, image } = req.body;

        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new List({
            title, description, image, user: req.user.id
        })
        const savedList = await note.save()

        res.json(savedList)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//Route 4:This is for the deletion of the note bro:
router.delete('/deletelist/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let list = await List.findById(req.params.id);
        if (!list) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Note
        if (list.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        list = await List.findByIdAndDelete(req.params.id)
        res.json({ "Success": "List has been deleted", list: list });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router