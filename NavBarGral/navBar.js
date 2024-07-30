// V5
let head = document.querySelector("head");
head.innerHTML += `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Ubuntu:wght@300&display=swap" rel="stylesheet"></link>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
`;

window.onload = function() {
    let nav = document.getElementById("NavBarGral");

    if (nav) {
        nav.innerHTML = `
            <div class="nav-list">
                <li><a href="../">Inicio</a></li>
                <li><a href="../Calculadora/">Calculadora</a></li>
                <li><a href="../NavBar/">Barra de navegacion</a></li>
                <li><a href="../Mode/">Modo claro y oscuro</a></li>
                <li><a href="../Responsive/">Menu Responsive</a></li>
            </div>
        `;
    } else {
        console.error("El elemento con id 'NavBarGral' no se encontró.");
    }
};


