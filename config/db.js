// 2. establish a data base connection and bring it in the server js
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('MongoDB connected');
  } catch (err) {
    console.log("Not connected due to error")
    console.log(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;