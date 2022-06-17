const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send("hello i am learning that how to create a rest api backend");
// })
// CREATING A NEW STUDENT

app.use(express.json());

app.post('/students', (req, res) => {
    console.log(req.body);
    const user = new Student(req.body)

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })

    // res.send("hello i am learning that how to create a rest api backend");
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})



// You don't need express.json() & express.urlencoded()
// for GET Requests or DELETE Requests . We only need it for post & put req



//  So, express.json() is a method inbuilt in express to recognize the incoming request object as a JSON Objct.

// This method is called a middleware in your applicatiion using this code : app.use(express.json());.