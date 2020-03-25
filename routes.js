const express = require("express");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const palettes = require("nice-color-palettes");
const mail = require("./mail");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("home", { title: "Daisho Front-end Developer" });
});

router.get("/getGrid/:count", (req, res) => {
    console.log("COUNT", req.params.count);
    random.setSeed();
    const colorCount = random.rangeFloor(1, 6);
    // const palette = random.shuffle(random.pick(palettes)).slice(0, colorCount);
    const palette = random.shuffle(random.pick(palettes));
    const text = [
        "node",
        "javascript",
        "react",
        "angular",
        "() => {}",
        "webpack",
        "ember",
        "vue",
        "gulp",
        "grant",
        "es6"
    ];

    const points = [];
    const count = req.params.count;
    for (let x = 0; x < count; x++) {
        for (let y = 0; y < count; y++) {
            const u = count <= 1 ? 0.5 : x / (count - 1);
            const v = count <= 1 ? 0.5 : y / (count - 1);
            const radius = Math.abs(random.noise2D(u, v)) * 0.1;
            points.push({
                color: random.pick(palette),
                radius,
                rotation: random.noise2D(u, v),
                position: [u, v],
                text: random.pick(text)
            });
        }
    }
    console.log("LAST", points.length);
    res.send(points);
});

router.post("/send", mail.sendMessage);

module.exports = router;
