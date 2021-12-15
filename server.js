var express = require('express');
require('./src/DB/mongoose')
const taskRouter = require('./src/router/task')
var app = express();

app.use(express.json())
app.use(taskRouter)
// app.get('/', function (req, res) {
//     res.send('Hello !');
// });
app.listen(3000, function () {
    console.log('App listening on port 3000!');
});