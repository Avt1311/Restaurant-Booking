const mongoose = require('mongoose');

const url = "mongodb+srv://aviralcsss:aviral1311@cluster0.58z23gy.mongodb.net/mydb?retryWrites=true&w=majority";

//asynchoronous function
mongoose.connect(url)
.then((result) => {
    console.log('database connected');    
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;