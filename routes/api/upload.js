const router = require("express").Router();
const multer = require("multer");
// Matches with "/api/games"
var path = require("path");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
const upload = multer({ storage })


router.route("/")
    .post(upload.single('image'), (req, res) => {
        console.log("made it this far")
        if (req.file)
            res.json({
                imageUrl: `images/uploads/${req.file.filename}`
            });
        else
            res.status("409").json("No Files to Upload.");
    });
    //Image Uploader END.create);

module.exports = router;