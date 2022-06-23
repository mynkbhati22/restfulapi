
const express = require("express");
// * creating a new router
const router = new express.Router();

const Student = require("../models/students");

// *need to define a router

// CREATING A NEW STUDENT






router.post('/students', async (req, res) => {

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


router.get('/', async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        res.send(e);
    }
})


router.get('/students', async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        res.send(e);
    }
})

// getting indivisual student id

router.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        if (!studentData) {
            return res.status(404).send();
        }
        else {
            res.send(studentData);
        }
    } catch (e) {
        res.status(500).send(e);
    }
})


// update the student by it's id

router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateName = await Student.findByIdAndUpdate(_id, req.body);
        res.send(updateName);

    } catch (e) {
        res.status(404).send(e);
    }
})


// delete the student data

router.delete('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteRecord = await Student.findByIdAndDelete(_id);

        if (!_id) {
            return res.status(404).send();
        }
        res.send(deleteRecord);
    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router;




