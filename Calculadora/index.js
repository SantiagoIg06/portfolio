// V1
// Modo y resultado 
let modeDW = document.getElementById("modeDW")
let result = document.getElementById("result")
// Numeros
let borr = document.getElementById("borr");
let borr1 = document.getElementById("borr1");
let divi = document.getElementById("divi");
let multi = document.getElementById("multi");
let siete = document.getElementById("7");
let ocho = document.getElementById("8");
let nueve = document.getElementById("9");
let cuatro = document.getElementById("4");
let cinco = document.getElementById("5");
let seis = document.getElementById("6");
let uno = document.getElementById("1");
let dos = document.getElementById("2");
let tres = document.getElementById("3");
let coma = document.getElementById(",");
let cero = document.getElementById("0");
let dobleCero = document.getElementById("00");
let porc = document.getElementById("porc");
let men = document.getElementById("men");
let mas = document.getElementById("mas");
let igu = document.getElementById("igu");
// Mode
let contenedorGeneral = document.getElementById('contGral');
let contenedorImagen = document.getElementById('contImgMove');
let imagen = document.getElementById('moveImg');
let calculadora = document.getElementById('calculadora');
let i = 0;


imagen.addEventListener("click", function () {
    if (i == 0) {
        // Add
        calculadora.classList.add("calcu2");
        contenedorGeneral.classList.add("cont-gral2");
        contenedorImagen.classList.add("cont2");
        imagen.classList.add("img-mode-os");
        result.classList.add("text2");
        borr.classList.add("btnCl1");
        borr1.classList.add("btnCl2");
        divi.classList.add("btnCl2");
        multi.classList.add("btnCl2");
        siete.classList.add("btnCl3");
        ocho.classList.add("btnCl3");
        nueve.classList.add("btnCl3");
        cuatro.classList.add("btnCl3");
        cinco.classList.add("btnCl3");
        seis.classList.add("btnCl3");
        uno.classList.add("btnCl3");
        dos.classList.add("btnCl3");
        tres.classList.add("btnCl3");
        coma.classList.add("btnCl2");
        cero.classList.add("btnCl3");
        dobleCero.classList.add("btnCl3");
        porc.classList.add("btnCl2");
        men.classList.add("btnCl2");
        mas.classList.add("btnCl2");
        igu.classList.add("btnCl4");

        // Remove
        calculadora.classList.remove("calcu");
        contenedorGeneral.classList.remove("cont-gral1");
        contenedorImagen.classList.remove("cont1");
        imagen.classList.remove("img-mode-bl");
        result.classList.remove("text");
        borr.classList.remove("btnCl");
        borr1.classList.remove("btnCl");
        divi.classList.remove("btnCl");
        multi.classList.remove("btnCl");
        siete.classList.remove("btnCl");
        ocho.classList.remove("btnCl");
        nueve.classList.remove("btnCl");
        cuatro.classList.remove("btnCl");
        cinco.classList.remove("btnCl");
        seis.classList.remove("btnCl");
        uno.classList.remove("btnCl");
        dos.classList.remove("btnCl");
        tres.classList.remove("btnCl");
        coma.classList.remove("btnCl");
        cero.classList.remove("btnCl");
        dobleCero.classList.remove("btnCl");
        porc.classList.remove("btnCl");
        men.classList.remove("btnCl");
        mas.classList.remove("btnCl");
        igu.classList.remove("btnCl");

        i++;
    } else if (i == 1) {
        // Add
        calculadora.classList.add("calcu");
        contenedorGeneral.classList.add("cont-gral1");
        contenedorImagen.classList.add("cont1");
        imagen.classList.add("img-mode-bl");
        result.classList.add("text");
        borr1.classList.add("btnCl");
        borr.classList.add("btnCl");
        divi.classList.add("btnCl");
        multi.classList.add("btnCl");
        siete.classList.add("btnCl");
        ocho.classList.add("btnCl");
        nueve.classList.add("btnCl");
        cuatro.classList.add("btnCl");
        cinco.classList.add("btnCl");
        seis.classList.add("btnCl");
        uno.classList.add("btnCl");
        dos.classList.add("btnCl");
        tres.classList.add("btnCl");
        coma.classList.add("btnCl");
        cero.classList.add("btnCl");
        dobleCero.classList.add("btnCl");
        porc.classList.add("btnCl");
        men.classList.add("btnCl");
        mas.classList.add("btnCl");
        igu.classList.add("btnCl");

        // Remove
        calculadora.classList.remove("calcu2");
        contenedorGeneral.classList.remove("cont-gral2");
        contenedorImagen.classList.remove("cont2");
        imagen.classList.remove("img-mode-os");
        result.classList.remove("text2");
        borr.classList.remove("btnCl1");
        borr1.classList.remove("btnCl2");
        divi.classList.remove("btnCl2");
        multi.classList.remove("btnCl2");
        siete.classList.remove("btnCl3");
        ocho.classList.remove("btnCl3");
        nueve.classList.remove("btnCl3");
        cuatro.classList.remove("btnCl3");
        cinco.classList.remove("btnCl3");
        seis.classList.remove("btnCl3");
        uno.classList.remove("btnCl3");
        dos.classList.remove("btnCl3");
        tres.classList.remove("btnCl3");
        coma.classList.remove("btnCl2");
        cero.classList.remove("btnCl3");
        dobleCero.classList.remove("btnCl3");
        porc.classList.remove("btnCl2");
        men.classList.remove("btnCl2");
        mas.classList.remove("btnCl2");
        igu.classList.remove("btnCl4");

        i--;
    }
})

function borrUlti() {
    let display = document.getElementById('result');
    let valorActu = display.value;
    let newValor = valorActu.slice(0, -1);
    display.value = newValor;
}

