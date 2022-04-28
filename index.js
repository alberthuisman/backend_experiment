const { json } = require('body-parser');
const express = require ('express');
const app = express();
const PORT = 5000;
const shortid = require('shortid');
app.use(express.json());

app.get('/', (req, res) => {
    res.json({message:"Hello World"})
});

app.get('/welcome', (req,res) => {
    res.json({message: "Welcome"})
});

let students = [];

app.post('/addstudent', (req,res) => {
    const newStudent = req.body;
    newStudent.id = shortid.generate();
    students.push(newStudent);
    res.status(200).json(newStudent);
});


app.get('/students', (req,res) => {
    res.status(200).json(students)
});

app.listen(PORT, () => {
    console.log(`My server is running at port ${PORT}`)
    console.log("Good luck");
    console.log("once again");
});