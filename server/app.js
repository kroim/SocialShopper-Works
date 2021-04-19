const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const Config = require('./config');
const verifyTokenMiddleware = require('./middleware/authJwt');
const apiRouter = require('./routes/api');

const app = express();

if(Config.mongodb_user_name.trim().length){
    mongoose.connect(`mongodb://${Config.mongodb_user_name}:${Config.mongodb_user_passwd}@${Config.mongodb_host}:${Config.mongodb_port}/${Config.mongodb_database}`).catch(err => {
        console.error("MongoDB Connection error", err);
        process.exit();
      });
} else {
    mongoose.connect(`mongodb://${Config.mongodb_host}:${Config.mongodb_port}/${Config.mongodb_database}`).catch(err => {
        console.error("MongoDB Connection error", err);
        process.exit();
      });
}

mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

app.use(express.json());
app.use(verifyTokenMiddleware);

app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', (req, res)=> {
    var buildFile = require('path').join(__dirname,'../build/index.html'); 
    res.sendFile(buildFile);
});

app.listen(4000, () => {
    console.log('Listening on port 4000');
}); 