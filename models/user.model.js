const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

// we are loading users schema into mongoose
mongoose.model("users", userSchema);
