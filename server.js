const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

const app = express()

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// DB Config
const db = require("./config/keys").dbURI;

// Connect to MongoDB
mongoose
.connect(
    db,
    { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
    
    // Serve up static assets (usually on heroku)
    if (process.env.NODE_ENV === "production") {
        app.use(express.static("client/build"));
    }
    
// Routes
// app.use("/api/users", users);
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(port, () => console.log(`Server up and running on port ${PORT} !`));


// //// replacing in favor of bodyParser - false
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// //// replacing in favor of my prod/build scripts
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/public"));

// }

// app.use(express.static("./client/build"));



// mongoose.Promise = Promise;

//const dbURI = process.env.MONGODB_URI || "mongodb://monkeyseemonkey2do:monkeyseemonkey2do@ds033037.mlab.com:33037/heroku_2rbklfzx";
// const dbURI = process.env.MONGODB_URI || "mongodb+srv://bananaAdmin:bananaSplit@users-uhpur.mongodb.net/test?retryWrites=true&w=majority";
// const dbURI = process.env.MONGODB_URI || "mongodb+srv://bananaAdmin:bananaSplit@users-shard-00-01-uhpur.mongodb.net:27017";


// mongoose.set('useCreateIndex', true)

// mongoose.connect(dbURI, { useNewUrlParser: true })

// const db = mongoose.connection;

// db.on("error", function (error) {
//     console.log("Mongoose Error: ", error);
// })

// db.once("open", function () {
//     console.log("Mongoose connection successful.")

//     app.listen(PORT, function () {
//         console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
//     });
// })