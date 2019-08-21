const express = require('express');
const app = express();
let port = process.env.PORT || 3000;

app.use('/', express.static("./app"));
app.use('/list', express.static("./app"));

app.listen(port, function(){
    console.log("Running in " + port);
});