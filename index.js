// APP JS 

const express = require('express');
const app = express();
var userRouter = require('./routes/users');
const cors = require('cors');

require('dotenv').config()
require('./db');
app.use(cors());
app.use('/', userRouter);
app.get('/',(req,res) =>{
    res.send('HOME');
// Si ya iniciamos Session 

// Si no iniciamos Session 

// Pantallas de muestra 
});
// app.post('/login',(req,res) => {
// //    Recibir credenciales


// });

// app.post('/register',(req,res) => {
//     res.send('register')
// });

app.listen(3000);
console.log('Put attention,Server on Port',3000);