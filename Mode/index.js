let contenedorGeneral = document.getElementById('contGral');
let contenedorImagen = document.getElementById('contImgMove');
let imagen = document.getElementById('moveImg');
let i = 0;


imagen.addEventListener("click", function () {
    if (i == 0) {
        contenedorGeneral.classList.add("cont-gral2");
        contenedorImagen.classList.add("cont2");
        imagen.classList.add("img-mode-bl");
        contenedorGeneral.classList.remove("cont-gral1");
        contenedorImagen.classList.remove("cont1");
        imagen.classList.remove("img-mode-os");
        i++;
    } else if (i == 1) {
        contenedorGeneral.classList.add("cont-gral1");
        contenedorImagen.classList.add("cont1");
        imagen.classList.add("img-mode-os");
        contenedorGeneral.classList.remove("cont-gral2");
        contenedorImagen.classList.remove("cont2");
        imagen.classList.remove("img-mode-bl");
        i--;
    }
    
})


