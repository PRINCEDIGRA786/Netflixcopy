const mongoose = require('mongoose')
// const mongoURI = "mongodb://127.0.0.1:27017/netflix"
// const mongoURI = "mongodb+srv://digraprince7:<IlKqi6D7N9ovvHV6>@cluster0.1qqmyp3.mongodb.net/"
const mongoURI = "mongodb+srv://digraprince7:seRx4FH4rpGnyRSG@netflix.6hdiqde.mongodb.net/?retryWrites=true&w=majority"
const connectToMongo = async () => {
    // mongoose.set('strictQuery', true)
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI)
        console.log('Mongo connected successfully')
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectToMongo;