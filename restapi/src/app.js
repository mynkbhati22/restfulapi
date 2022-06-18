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

app.post('/students', async (req, res) => {

    // console.log(req.body);
    try {
        const user = new Student(req.body)
        const createUser =
            await user.save()
        res.status(201).send(createUser);

    } catch (e) {
        res.status(400).send(e);
    }


    // res.send("hello i am learning that how to create a rest api backend");
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})



app.get('/students', async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        res.send(e);
    }
})
// You don't need express.json() & express.urlencoded()
// for GET Requests or DELETE Requests . We only need it for post & put req



//  So, express.json() is a method inbuilt in express to recognize the incoming request object as a JSON Objct.

// This method is called a middleware in your applicatiion using this code : app.use(express.json());.