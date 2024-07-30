window.onload = function() {
    let nav = document.getElementById("NavBarGral");

    if (nav) {
        nav.innerHTML = `
            <div class="nav-list">
                <li><a href="../">Inicio</a></li>
                <li><a href="../Calculadora/">Calculadora</a></li>
                <li><a href="../NavBar/">NavBar</a></li>
                <li><a href="../Mode/">Mode</a></li>
                <li><a href="#">C</a></li>
            </div>
        `;
    } else {
        console.error("El elemento con id 'NavBarGral' no se encontró.");
    }
};
