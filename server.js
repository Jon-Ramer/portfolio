'use strict';

// create variables for server packages

const express = require('express');
const PORT = 3000;
const app = express(); // creates constant with server of express


app.get('/text', (request, response) => {
    const message = `# visits = ${visits}.`;
    response.send(message);
})

app.get('/student', (request, response) => {
    const studentJSON = {
        name: 'jon',
        date_on_site: Date.now(),
        ta: "needs permanent"
    }
    response.send(studentJSON);
}

app.use('*', request, response) => {
    response.send("Nothing here");
}

app.

// always last line
app.listen(PORT,() => console.log('server running on port ' + PORT));