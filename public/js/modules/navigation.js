const navigation = () => {
    const links = [].slice.call(document.getElementsByClassName("link"));
    const destLinks = [].slice.call(
        document.getElementsByClassName("dest-link")
    );

    const clickListener = (link, i) => {
        link.addEventListener(
            "click",
            () => destLinks[i].scrollIntoView({ behavior: "smooth" }),
            false
        );
    };

    for (let i = 0, len = links.length; i < len; i++) {
        clickListener(links[i], i);
    }
};

export default navigation;
