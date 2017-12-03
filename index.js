const express = require('express');
const app = express();

const POST = process.env.PORT || 5000;

app.get('/', (request, response) => {
    response.send({hi: 'there'});
});

app.listen(PORT);