import "../sass/style.scss";
import init from "./modules/init";
import resizeLogo from "./modules/resizeLogo";
import navigation from "./modules/navigation";
import carousel from "./modules/carousel";
import progressBar from "./modules/progressbar";
import toggleModal from "./modules/toggleModal";
import destroyFlash from "./modules/flash";
import data from "../../data";

const count = 35;
document.addEventListener("DOMContentLoaded", () => {
    init();
    resizeLogo();
    navigation();
    carousel(data);
    progressBar();
    toggleModal();
    destroyFlash();
    getGrid(count);
});

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = 1000;
const height = 1000;

const lerp = (min, max, t) => {
    return min * (1 - t) + max * t;
};
function getGrid(count) {
    console.log("get grid init", count);
    context.clearRect(0, 0, width, height);
    fetch(`/getGrid/${count}`)
        .then(res => res.json())
        .then(points => {
            console.log("DATA", points);
            points = points.filter(() => Math.random() > 0.5);
            const margin = width * 0.015;
            console.time("paint");
            for (let i = 0; i < points.length; i++) {
                const { position, radius, color, rotation, text } = points[i];
                const [u, v] = position;

                const x = lerp(margin, width - margin, u);
                const y = lerp(margin, height - margin, v);
                context.save();
                context.fillStyle = color;
                context.font = `${radius * width}px "Helvetica"`;
                context.translate(x, y);
                context.rotate(rotation);
                context.fillText(text, 0, 0);
                context.restore();
            }
            console.timeEnd("paint"); //3.31s
        });
}

// document.getElementById("grid").addEventListener("click", () => getGrid(count));
