window.onload = function() {
    let nav = document.getElementById("NavBarGral");

    if (nav) {
        nav.innerHTML = `
            <div class="nav-list">
                <li><a href="../">Inicio</a></li>
                <li><a href="../Calculadora/">Calculadora</a></li>
                <li><a href="../NavBar/">Barra de navegacion</a></li>
                <li><a href="../Mode/">Modo claro y oscuro</a></li>
                <li><a href="#">C</a></li>
            </div>
        `;
    } else {
        console.error("El elemento con id 'NavBarGral' no se encontró.");
    }
};
