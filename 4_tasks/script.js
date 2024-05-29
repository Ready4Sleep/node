
const express = require('express');
const joi = require('joi');
const app = express();
const port = 3000;
let uniqID = 0;

const fs = require("fs");
const dataFile = fs.readFileSync('./data.json', 'utf8')
let data = JSON.parse(dataFile);

let users = data



const userSchema = joi.object({
    firstName: joi.string().min(1).required(),
    secondName: joi.string().min(1).required(),
    age: joi.number().min(0).max(150).required(),
    city: joi.string().min(1)
})

app.use(express.json())

app.get('/users', (req, res) => {
    res.send({users});
  })

app.post('/users', (req, res) => {
    uniqID += 1

    users.push({
        id: uniqID,
        ...req.body
    })
    const usersWithNewUser = JSON.stringify(users);
    fs.writeFileSync('data.json', usersWithNewUser);
    res.send({id: uniqID})
})

app.put('/users/:id', (req,res) => {

    const result = userSchema.validate(req.body)
    if (result.error) {
        return res.status(404).send({error: result.error.details})
    }
    const userID = +req.params.id;
    const user = users.find(user => user.id === userID);

    if (user){
        const {firstName, secondName, age, city } = req.body;
        user.firstName = firstName;
        user.secondName = secondName;
        user.age = age;
        user.city = city;
        const usersWithNewUser = JSON.stringify(users);
        fs.writeFileSync('data.json', usersWithNewUser);
        res.send({ user });
    } else {
        res.status(404);
        res.send({user: null});
    }
})

app.get('/users/:id', (req, res) => {

    const userID = +req.params.id;
    const user = users.find(user => user.id === userID);

    if (user){
        res.send({ user });
    } else {
        res.status(404);
        res.send({user: null});
    }
  })

app.delete('/users/:id', (req,res) => {
    const userID = +req.params.id;
    const user = users.find(user => user.id === userID);
    if (user){
        const userIndex = users.indexOf(user);
        users.splice(userIndex, 1);
        const usersWithNewUser = JSON.stringify(users);
        fs.writeFileSync('data.json', usersWithNewUser);
        res.send({ user });
    } else {
        res.status(404);
        res.send({user: null});
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
