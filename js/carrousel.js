(function () {
    // console.log('début du carrousel')
    let carrousel = document.querySelector(".carrousel");
    // console.log("carrousel = " + carrousel.tagName)
    let bouton = document.querySelector(".bouton__ouvrir");
    // console.log("bouton = " + bouton.tagName)
    let carrousel__x = document.querySelector(".carrousel__x");

    let galerie = document.querySelector(".galerie");
    // let galerie__img = galerie.querySelector('img') // première image seulement

    let carrousel__figure = document.querySelector(".carrousel__figure");

    let galerie__img = galerie.querySelectorAll("img"); // la collection des images de la galerie

    let carrousel__form = document.querySelector(".carrousel__form");

    let index = 0;

    for (const elm of galerie__img) {
        creer_image_carrousel(index, elm);
        creer_radio_carrousel(index);

        index++;
    }

    /**
     * Créer une image pour chaque image de la galerie
     * @param {number} index    index de l'image
     * @param {HTMLImageElement} elm    image de la galerie
     */
    function creer_image_carrousel(index, elm) {
        let carrousel__img = document.createElement("img");
        carrousel__img.classList.add("carrousel__img");
        carrousel__img.dataset.index = index;
        elm.dataset.index = index;
        // console.log(elm.src);
        carrousel__img.src = elm.src;
        // console.log(carrousel__img.src);
        carrousel__figure.appendChild(carrousel__img);

        elm.addEventListener("click", ouvrir_carrousel);
    }

    /**
     * Créer un bouton radio pour chaque image
     * @param {number} index numero du radio bouton
     */
    function creer_radio_carrousel(index) {
        // ajouter des boutons radios pour chaque img
        let radio__bouton = document.createElement("input");

        radio__bouton.setAttribute("value", index);
        radio__bouton.setAttribute("type", "radio");
        radio__bouton.setAttribute("name", "carrousel__radio");

        radio__bouton.classList.add("carrousel__radio");
        carrousel__form.appendChild(radio__bouton);

        // Si on choisi le bouton radio, on met la classe img--afficher à l'image correspondanteselon l'index
        radio__bouton.addEventListener("change", function () {
            let img__affiche__avant = document.querySelector(".carrousel__img.img--afficher");
            img__affiche__avant.classList.remove("img--afficher");
            let img__afficher_apres = document.querySelectorAll(".carrousel__img")[index];
            img__afficher_apres.classList.add("img--afficher");
        });
    }

    /**
     * Ouvrir le carrousel
     * @param {MouseEvent} e
     */
    function ouvrir_carrousel(e) {
        let index = e.target.dataset.index;
        let img__affiche__avant = document.querySelector(".carrousel__img.img--afficher");
        img__affiche__avant.classList.remove("img--afficher");
        let img__afficher_apres = document.querySelectorAll(".carrousel__img")[index];
        img__afficher_apres.classList.add("img--afficher");
        carrousel.classList.add("carrousel--ouvrir");

        //selectionner le bons boutons radio
        let radio__bouton = document.querySelectorAll(".carrousel__radio");
        radio__bouton[index].checked = true;
    }

    // on affiche la première image
    let img__afficher = document.querySelector(".carrousel__img");
    img__afficher.classList.add("img--afficher");

    // selectionner le premier bouton radio
    let radio__bouton = document.querySelector(".carrousel__radio");
    radio__bouton.checked = true;

    carrousel__x.addEventListener("mousedown", function () {
        // console.log("bouton mousedown ");
        carrousel.classList.remove("carrousel--ouvrir");
    });
})();
