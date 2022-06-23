var path = require('path');

// Load .env file
require('dotenv').load({
  path: path.join(__dirname, './.env'),
  silent: true
});
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//If there is a .env file so it will read PORT variable if not then 5000
const PORT = process.env.PORT || 5000

//To avoid that stupid deprecated warning
mongoose.Promise = global.Promise;

require('./api/model')

//YourDBName is a Database name you dont need to create it will automatically creates a DB
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/YourDBName`, { useMongoClient: true }, function (err) {
  if (err) {
     throw new Error(err);
  }
  else {
    console.log("MongoDB is now Connected")
  }
});


//We will be connecting the express REST APIs with our front end so we need CORS config for it
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


//body parser middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.use(express.static('./client/build'));

app.use('/api', require('./api'));


app.listen(PORT,function () {
  
  console.log('Running server on ' + PORT);
});
