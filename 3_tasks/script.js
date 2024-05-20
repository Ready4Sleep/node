
const express = require('express')
const app = express()
const port = 3000
const fs = require("fs");

const statDataFile = fs.readFileSync('./statistic.json', 'utf8')
let data = JSON.parse(statDataFile);

app.get('/', (req, res) => {

    if (req) {
        data.homePage += 1
        const data2 = JSON.stringify(data);
        fs.writeFileSync('./statistic.json', data2);
    }
    res.send(
        `
        <h2>
            Home Page
        </h2>
        <p>Просмотров: ${data.homePage} </p>
        <a href="/about"> Link to "about" page</a>
        `
    );
})

app.get('/about', (req, res) => {
    if (req) {
        data.aboutPage += 1
        const data2 = JSON.stringify(data);
        fs.writeFileSync('./statistic.json', data2);
    }
    res.send(
        `
        <h2>
        About page
        </h2>
        <p>Просмотров: ${data.aboutPage}</p>
        <a href="/"> Link to "home" page</a>
        `
    );
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
