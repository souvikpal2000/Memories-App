const express = require("express");
const app = express();
require("./db/connection");

const Posts = require("./routers/posts");
app.use(Posts);

const PORT = 3030;
app.listen(PORT, (err) => {
    if(!err){
        return console.log("Server running at PORT 3030");
    }
    console.log(err);
})