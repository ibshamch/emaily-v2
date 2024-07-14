const express = require("express");
const app = express();

require("./services/passport");
require("./routes/authRoutes")(app);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
