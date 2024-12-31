//create web server
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

//create a new endpoint for comments
app.post("/comments", (req, res) => {
    console.log(req.body);
    res.json({ message: "Comment received!" });
});

//start the server
app.listen(4001, () => {
    console.log("Server is listening on port 4001");
});