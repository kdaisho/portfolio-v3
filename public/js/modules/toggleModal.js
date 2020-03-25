const contact = () => {
    const modalTrigger = document.getElementById("modal_trigger");
    const modalClose = document.getElementById("modal_close");
    const overlay = document.getElementById("modal-overlay");
    modalTrigger.addEventListener(
        "click",
        () => {
            overlay.classList.add("modal-on");
        },
        false
    );
    modalClose.addEventListener(
        "click",
        () => {
            overlay.classList.remove("modal-on");
        },
        false
    );
};

export default contact;
