const express = require('express')
const app = express()
const port = 3100;


app.get("/", (req, res) => {
    res.send("Mr ekarin.yodamnon");
});

app.listen(port, () => {
    console.log("server starting on port", port);
});