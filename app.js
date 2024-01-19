const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./util/database');
const notes = require('./routes/notes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/',notes);

sequelize.sync()
.then(()=>{
       app.listen(5000, console.log('Server starts on 5000')); 
    }
)
.catch(err=>console.log(err));