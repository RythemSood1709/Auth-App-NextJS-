const express=require('express');

const app=express();
const bodyParser= require('body-parser')
const cors=require('cors');
const authRoutes=require('./src/routes/authRoutes')

require('dotenv').config();
require('./src/models/db');

const PORT=process.env.PORT|| 8080;

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.use(bodyParser.json());
app.use(cors());


app.use('/auth',authRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});