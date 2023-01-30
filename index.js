const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Server Side
app.use(cors())
app.use(express.json())
// Routes



// Frontend

app.use(express.static(path.join(__dirname, '../Frontend/_____')));

app.listen(port);


console.log("Helloooo");
