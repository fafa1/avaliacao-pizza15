const mongoose = require('mongoose')
const MONGODB_URL = 'mongodb+srv://pizza15Ratings:apiRatings@cluster0-edoag.mongodb.net/pizza15Ratings?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
})