const buttonClick = () => {
    const buttons = document.getElementsByClassName("button");
    console.log("c%BUTTONS", "color: red", buttons);
    const clickListener = button => {
        button.addEventListener("click", () => {
            button.classList.toggle("active");
        });
    };

    for (let i = 0, len = buttons.length; i < len; i++) {
        clickListener(buttons[i]);
    }
};

export default buttonClick;
