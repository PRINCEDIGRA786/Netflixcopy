const connectToMongo = require('./db')
connectToMongo();

// NOw let's express:
const express = require('express');
var cors = require('cors')
const app = express();
const port = 5000;

app.use(cors())

app.use(express.json()) //This is to let the use of req.body....

// Routes:
app.use('/api/auth', require('./routes/auth'));
app.use('/api/list', require('./routes/list'));
app.use('/',(req,res)=>{
    res.json({"mesaage":"connected to server"});})


app.listen(port, () => {
    console.log(`Netflix app backend listening at port :  http://localhost:${port}`)
})
