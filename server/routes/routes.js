const express = require("express");
const router = express.Router();
const API = require("../controllers/api");
const multer = require("multer");

// multer middleware
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single("image");

router.get("/", API.getAllPost);
router.get("/:id", API.getPostById);
router.post("/", upload, API.createPost);
router.patch("/:id", API.updatePost);
router.delete("/:id", API.deletePost);

module.exports = router;
