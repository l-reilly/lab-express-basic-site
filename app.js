const { request, response } = require('express');
const express = require('express');
const app = express();

app.get('/', (request, response) => {
response.sendFile(path.join(__dirname, "view", "home.html"))
})

app.get('/about', (request, response) => {
    response.sendFile(path.join(__dirname, 'view', "about.html"))
})
app.get('/works', (request, response) => {
    response.sendFile(path.join(__dirname, 'view', "works.html"))
})
app.get("/*", (request, response) => {
    response.sendFile(path.join(__dirname, 'view', "not-found.html"))
})
app.listen(7000, () => console.log("server is running"))