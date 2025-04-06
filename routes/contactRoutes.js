const express = require("express");
const router = express.Router();
const { validateContact } = require("../middleware/validateRequest");
const { handleContact } = require("../controllers/contactController");


router.post("/contact", validateContact, handleContact);

module.exports = router;
