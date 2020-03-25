const progressBar = () => {
    const target = document.getElementById("wrap_skill");
    const addClassName = () => {
        if (target.getBoundingClientRect().top + 100 <= window.innerHeight) {
            target.classList.add("grow-bar");
            document.removeEventListener("scroll", addClassName);
        }
    };

    document.addEventListener("scroll", addClassName, {
        passive: true
    });
};

export default progressBar;
