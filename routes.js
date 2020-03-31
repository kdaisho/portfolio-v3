const express = require("express");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const palettes = require("nice-color-palettes");
const mail = require("./mail");

console.log("P::", palettes);
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home", { title: "Daisho Front-end Developer", palettes });
});

router.post("/send", mail.sendMessage);

module.exports = router;
