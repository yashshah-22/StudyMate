const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://yashshah2280:pwmVMHchxZLIjniM@cluster0.0t7bdve.mongodb.net/Studymate?retryWrites=true&w=majority";
  const connectWithRetry = async () => {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000,
      });
      console.log("Database connected!");
    } catch (err) {
      console.error(err);
      // Implement retry logic
      setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
    }
  };
  
  connectWithRetry();
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
       serverSelectionTimeoutMS: 30000, 
    });
    console.log("Database connected!");
  } catch (err) {
    console.error(err);
  }
};

module.exports = mongoDB;
