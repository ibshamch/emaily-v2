const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");
const app = express();

app.use(
  //Enabling cookies in express app
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

// Telling passport to make use of cookies
app.use(passport.initialize());
app.use(passport.session());

require("./models/user.model");
require("./services/passport");

mongoose.connect(keys.mongoURI);

require("./routes/authRoutes")(app);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
