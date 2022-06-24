const express = require('express');
const mainRoutes = require('./routes/mainRoutes');
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/URL-Shortener',
{useUnifiedTopology : true});

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(mainRoutes);

app.listen(process.env.PORT || 3000);