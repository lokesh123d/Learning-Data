const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

let notes = [];

app.get('/notes', (req, res) => {
    res.status(200).json({ message: "Get all notes", notes: notes });
});

// POST create a new note
app.post('/notes', (req, res) => {
    const newnote = req.body;
    notes.push(newnote);
    res.status(201).json({ message: "Note created successfully", note: newnote });
});


app.delete('/notes/:index',(req,res)=>{
    const index = req.body.params;
    delete notes [index];
    res.status(200).json({message:"note delete successfully"});
})




app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});