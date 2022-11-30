const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// Route 1: Get all the notes: Login Required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
});

// Route 2: Add a new note using Post: Login required
router.post(
    "/addnote",
    fetchuser,
    [
        body("title", "enter a valid title").isLength({ min: 3 }),
        body("description", "Description must be atleast 5 characters").isLength({
            min: 5,
        }),
    ],
    async (req, res) => {
        try {
            const { title, description, tag } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const note = new Notes({
                title,
                description,
                tag,
                user: req.user.id,
            });

            const savedNote = await note.save();

            res.json(savedNote);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);

// ROUTE 3: Update an existing note using "PUT"
router.put("/updatenote/:id", fetchuser, async (req, res)=>{
    const {title, description, tag} = req.body;

    // Create a newNote object
    const newNote = {};

    if (title){newNote.title = title};
    if(description){newNote.description= description};
    if(tag){newNote.title = title};

    // Find the note to be updated and update it
    let note = await Notes.findById(req.params.id);
    if(!note){return res.statusMessage(404).send("Not Found")}

    // console.log(note);
    // console.log(req.user);
    

    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed");
    }

    note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true});
    res.json({note})
})

module.exports = router;
