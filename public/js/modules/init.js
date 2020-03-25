const init = () => {
    document.documentElement.className += !(
        "ontouchstart" in document.documentElement
    )
        ? "no-touch"
        : "";
};

export default init;
