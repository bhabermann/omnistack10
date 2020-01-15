const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: "Agora vai" });
});

app.listen(3333)