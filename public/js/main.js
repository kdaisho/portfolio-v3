import "../sass/style.scss";
// import init from "./modules/init";
// import resizeLogo from "./modules/resizeLogo";
// import navigation from "./modules/navigation";
// import carousel from "./modules/carousel";
// import progressBar from "./modules/progressbar";k
// import toggleModal from "./modules/toggleModal";
// import destroyFlash from "./modules/flash";
// import data from "../../data";
import toggleMenu from "./modules/toggleMenu";
import dd from "./modules/dragDrop";

// import buttonClick from "./modules/buttonClick";

document.addEventListener("DOMContentLoaded", () => {
    toggleMenu();
    dd.initTouch();
    // init();
    // resizeLogo();
    // navigation();
    // carousel(data);
    // progressBar();
    // toggleModal();
    // destroyFlash();
    // buttonClick();
});
