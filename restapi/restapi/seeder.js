
var mongoose = require('mongoose');
const ViModel = require('./api/model');
const Users = mongoose.model('Users');


//To avoid that stupid deprecated warning
mongoose.Promise = global.Promise


var DummyData = [
    {"email" : "dummyemail1@email.com", "username" : "dummyusername1", "password" : "dummypw1"},
    {"email" : "dummyemail2@email.com", "username" : "dummyusername2", "password" : "dummypw2"},
    {"email" : "dummyemail3@email.com", "username" : "dummyusername3", "password" : "dummypw3"},
]

console.info("Connecting to Database")
mongoose.connect(`mongodb://localhost/YourDBName`, {
  useMongoClient: true
}
  , (err) => {
    if(err) {
        throw new Error(err.message)
    }
    else {
        console.info("Adding Dummy data....")
        var New_User
        //MongoDB will automatically create table with lowercase form of your Model name like Users will be users
        DummyData.forEach( (element) => {
             New_User = new Users(element)
             New_User.save( (err) => {
                if(err) {
                    throw new Error(err.message)
                }
            })
        })

        console.info("Data has been added !")

      

    }
  })
