const express = require("express");

const mongoose = require("mongoose");
// Added BodyParser
const bodyParser = require("body-parser");
// Added for Logins
const passport = require("passport");
const users = require("./routes/api/users");



const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./Config/keys").mongoURI;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// // Connect to MongoDB
mongoose
  .connect(
    db,
    {useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log("This is not working",err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./Config/passport")(passport);
// Routes
app.use("/api/users", users);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

