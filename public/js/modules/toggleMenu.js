const toggleMenu = () => {
    const menuPane = document.getElementById("menuPane");
    const menuButton = document.getElementById("menuButton");
    menuButton.addEventListener("click", () => {
        menuPane.classList.toggle("active");
    });
};

export default toggleMenu;
