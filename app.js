// Require packages and set the port
const express = require('express');
const port = 3002;
const app = express();

app.get('/', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send('Hello, Server!');
});

app.get("/about", (request, response) =>{ response.json({
    name: "Ta Quoc Y",
    website: "cntt.donga.edu.vn"
})
})

// Start the server
const server = app.listen(process.env.PORT || 5000, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});

