const express = require('express');
const app = express();

const port = 3000;

app.get('/', function(req, res){
    res.send("Server Connected.");
});

app.listen(port, function(){
    console.log(`Server Connected on ${port}.`);
});

// Basic Source codes for backend - 03.09