const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const multer = require('multer');
const cors = require('cors');

const users = require("./routes/api/users");
const games = require("./routes/api/games");
const upload = require("./routes/api/upload");


const app = express();





// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//static images
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}else {
  app.use(express.static("public"));

}


// DB Config
const db = process.env.MONGODB_URI || require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

app.use(cors());
 
// Routes
app.use("/api/users", users);
app.use("/api/games", games);
app.use("/api/upload", upload);
//Image Uploader

  
//Image Uploader END

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
