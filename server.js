const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/public"));

}

app.use(routes);


mongoose.Promise = Promise;
const dbURI = process.env.MONGODB_URI || "mongodb://monkeyseemonkey2do:monkeyseemonkey2do@ds033037.mlab.com:33037/heroku_2rbklfzx";

mongoose.set('useVreateIndex', true)
mongoose.connect(dbURI, { useNewUrlParser: true })

const db = mongoose.connection;

db.on("error", function (error) {
    console.log("Mongoose Error: ", error);
})

db.once("open", function () {
    console.log("Mongoose connection successful.")

    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
})