// Library Imports
var express = require('express'); 

// Start up server at default port if available. If not, use https://localhost:3000
const app = express();
app.use(express.static('public'));
var port = process.env.PORT || 3000;
var server = app.listen(port);
console.log("Successfully started at port " + port);