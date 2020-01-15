const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const multer = require("multer");
const cors = require("cors");

const users = require("./routes/api/users");

const app = express();

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

//Code from Image Upload Tutorial -start-
app.use(express.static('client'))

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, 'client/public/images/uploads')
  },
  filename: (req, file, cb) => {
  cb(null, Date.now() + '-' + file.originalname)
  }
  });
  const upload = multer({ storage })
   
  app.use(cors());
   
  app.post('/upload', upload.single('image'), (req, res) => {
  if (req.file)
  res.json({
  imageUrl: `images/uploads/${req.file.filename}`
  });
  else 
  res.status("409").json("No Files to Upload.");
  });

  //-----end------

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
