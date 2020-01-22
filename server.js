const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const multer = require('multer');
const cors = require('cors');

const users = require("./routes/api/users");
const games = require("./routes/api/games");

const app = express();
//static images
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

//Image Uploader
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, 'public/images/uploads')
  },
  filename: (req, file, cb) => {
  cb(null, Date.now() + '-' + file.originalname)
  }
  });
  const upload = multer({ storage })
   
  app.use(cors());
   
  app.post('/upload', upload.single('image'), (req, res) => {
    console.log("made it this far")
  if (req.file)
  res.json({
  imageUrl: `images/uploads/${req.file.filename}`
  });
  else 
  res.status("409").json("No Files to Upload.");
  });
//Image Uploader END

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

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

// Routes
app.use("/api/users", users);
app.use("/api/games", games);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
