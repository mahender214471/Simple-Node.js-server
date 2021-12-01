// SERVER DEPENDENCIES MODULES : => 
require('dotenv').config();
const express   = require('express');
const mongodb   = require('connection-to-mongodb');
const app       = express();
const rootDor   = process.cwd();
const db        = mongodb(rootDor , process.env.mongoPath );

// EXPRESS MIDDLEWARES : => 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/'  , express.static('src'));
// SERVER ROUTES : => 
const Routes = require('./app/routes');
const Route = new Routes (app , db , rootDor )
// LISSNING THE APP : => 
const port = process.env.PORT || 3000 ;
app.listen(port , () => {
     console.log(`server start at port : ${port}`);
}) ;