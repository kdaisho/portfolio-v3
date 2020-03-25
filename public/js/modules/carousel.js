const carousel = data => {
    const thumbsParent = document.getElementById("wrap-thumbs");
    const galHolder = document.getElementById("gal_holder");
    const imgHolder = document.getElementById("img_holder");
    const descHolder = document.getElementById("desc_holder");
    const modalBg = document.getElementById("modal_bg");
    const closeBtn = document.getElementById("close_btn");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const bigsrc = data.bigsrc;

    const displaySlide = event => {
        if (event.target !== event.currentTarget) {
            const pos = event.target.getAttribute("data-pos");
            injectElement(pos);
            galHolder.className = "is-active";
            modalBg.className = "is-active";
        }
        event.stopPropagation();
    };

    const injectElement = pos => {
        imgHolder.innerHTML = `<img id="data_img" src="images/${bigsrc[pos].url}" data-id="${bigsrc[pos].id}">`;
        descHolder.innerHTML = `<h4>${bigsrc[pos].title}</h4><p>${bigsrc[pos].desc}</p>`;

        if (bigsrc[pos].link) {
            const anchor = document.createElement("a");
            anchor.href = bigsrc[pos].link;
            anchor.setAttribute("target", "_blank");
            anchor.innerHTML = "Visit";
            descHolder.appendChild(anchor);
        }
    };

    const clickAction = fn => {
        return () => {
            const pos = document
                .getElementById("data_img")
                .getAttribute("data-id");
            fn(pos);
        };
    };

    const forwards = pos => {
        if (parseInt(pos) === 0) {
            pos = bigsrc.length - 1;
        } else {
            pos--;
        }
        injectElement(pos);
    };

    const backwards = pos => {
        if (parseInt(pos) === bigsrc.length - 1) {
            pos = 0;
        } else {
            pos++;
        }
        injectElement(pos);
    };

    const closeCarousel = () => {
        const arr = [modalBg, closeBtn];
        for (let i = 0, len = arr.length; i < len; i++) {
            arr[i].addEventListener(
                "click",
                () => {
                    galHolder.className = "";
                    modalBg.className = "";
                },
                false
            );
        }
    };

    thumbsParent.addEventListener("click", displaySlide, false);
    next.addEventListener("click", clickAction(forwards), false);
    prev.addEventListener("click", clickAction(backwards), false);
    closeCarousel();
};

export default carousel;
