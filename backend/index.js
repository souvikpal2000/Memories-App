const express = require("express");
const app = express();
require("./db/connection");

app.use(express.json({limit: '10mb'}));

const Posts = require("./routers/posts");
const Users = require("./routers/users");
app.use(Posts);
app.use(Users);

const PORT = 3030;
app.listen(PORT, (err) => {
    if(!err){
        return console.log("Server running at PORT 3030");
    }
    console.log(err);
})