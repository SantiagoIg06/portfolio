// V1
// Modo y resultado 
let modeDW = document.getElementById("modeDW")
let result = document.getElementById("result")
// Numeros
let borr = document.getElementById("borr");
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


// Variable global
let defect = '0';
let operador = null; 
let preDefect = null; 

// Atualizar la pantalla de la calculadora
function updateScreen() {
    result.textContent = defect;
}

// Boton C
borr.addEventListener('click', () => {
    defect = '0'; 
    operador = null; 
    preDefect = null; 
    updateScreen(); 
});

