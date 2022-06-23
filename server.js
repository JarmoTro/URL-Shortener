const express = require('express');
const mainRoutes = require('./routes/mainRoutes');
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://jarmo:Password123@cluster0.jkhcl.mongodb.net/?retryWrites=true&w=majority',
{useUnifiedTopology : true});

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(mainRoutes);
app.use(express.static('public'));

port = 3000;
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}.`);
});