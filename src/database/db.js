const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Connecting to Database.");

  mongoose
    .connect(
      "mongodb+srv://samirlaguardiaii:VYi8KjETusSIJyJd@cervejablogcluster.p50ifxb.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Connected to MongoDB Atlas Database."))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
