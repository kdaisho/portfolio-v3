const destroyFlash = () => {
    if (!document.getElementById("flashClose")) return false;

    const trigger = document.getElementById("flashClose");
    const flashSelf = trigger ? trigger.parentNode : "";

    trigger.addEventListener(
        "click",
        () => {
            console.log("clicked", flashSelf, flashSelf.parentNode);
            flashSelf.parentNode.removeChild(flashSelf);
        },
        false
    );
};

export default destroyFlash;
