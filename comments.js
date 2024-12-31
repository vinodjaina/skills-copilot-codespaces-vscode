// Create web server
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Import comments data
const comments = require('./comments.json');

// Create GET /comments endpoint
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create POST /comments endpoint
app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.json(newComment);
});

// Create PUT /comments/:id endpoint
app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const newComment = req.body;
    comments[id] = newComment;
    res.json(newComment);
});

// Create DELETE /comments/:id endpoint
app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments.splice(id, 1);
    res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});