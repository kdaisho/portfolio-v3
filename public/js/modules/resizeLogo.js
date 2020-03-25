const resizeLogo = () => {
    let windowSize;
    let scrollAmount;
    const siteLogo = document.getElementById("site_logo");
    const mainMenu = document.getElementById("main_menu");
    const nav = document.getElementById("nav");
    const closeNav = document.getElementById("close_nav");

    const addListenerMulti = (element, events, fn) => {
        const list = events.split(" ");
        for (let i = 0, len = list.length; i < len; i++) {
            element.addEventListener(list[i], fn, false);
        }
    };

    addListenerMulti(window, "load resize scroll", () => {
        windowSize = window.innerWidth;
        scrollAmount = window.pageYOffset;

        if (siteLogo && windowSize && scrollAmount) {
            scrollAmount >= 199 || windowSize <= 767
                ? siteLogo.classList.add("mini-logo")
                : siteLogo.classList.remove("mini-logo");
        }
    });

    mainMenu.addEventListener("click", () => {
        nav.style.right = 0;
    });

    closeNav.addEventListener("click", () => {
        nav.style.right = "-320px";
    });
};

export default resizeLogo;
