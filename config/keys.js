// module.exports = {
//     // dbURI: "mongodb+srv://bananaAdmin:bananaSplit@users-uhpur.mongodb.net/test?retryWrites=true&w=majority",
//     dbURI: "mongodb+srv://bananaAdmin:bananaSplit@users-shard-00-01-uhpur.mongodb.net:27017",
//     secretOrKey: "secret"
// }

module.exports = {
    dbURI: process.env.MONGODB_URI || "mongodb+srv://bananaAdmin:bananaSplit@users-uhpur.mongodb.net/test?retryWrites=true&w=majority",
    secretOrKey: "secret"
}