const { Router } = require("express");
const { upload } = require("../controller/imageController");
const { imageUpload } = require("../utils/uploud");

const router = Router();

router.route("/upload").post(imageUpload.single("image"), upload);

module.exports = router;
