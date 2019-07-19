const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://sbhgn0721:sbhgn0721@ds253017.mlab.com:53017/heroku_lp1xx3js");

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});