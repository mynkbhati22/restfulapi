const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connection is setup");
}).catch((e) => {
    console.log("there is no conenction");
})

