const express = require('express')
const app = express()
const port = 3000;

let department = [
    {id:1, name: "IT"},
    {id:2, name: "DBT"},
];

app.get("/", (req, res) => {
    res.send("Mr ekarin.yodamnon");
});

app.get("/department", (req, res ) => {
    res.send(department);
});
app.post("/department", (req, res ) => {
    let newDapartment = {
        id: department.lendth + 1,
        name: req.body.name,
    };
    department.push( newDapartment);
    res.send(department);
});

app.post("/department", (req, res ) => {
let newDapartment = 
res.send(department);
});

app.listen(port, () => {
    console.log("server starting on port", port);
});