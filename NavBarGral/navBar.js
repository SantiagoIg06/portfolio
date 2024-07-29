window.onload = function() {
    let nav = document.getElementById("NavBarGral");

    if (nav) {
        nav.innerHTML = `
            <div class="nav-list">
                <li><a href="/index.html">Inicio</a></li>
                <li><a href="/Calculadora/index.html">Calculadora</a></li>
                <li><a href="/NavBar/index.html">NavBar</a></li>
                <li><a href="#">C</a></li>
                <li><a href="#">C</a></li>
            </div>
        `;
    } else {
        console.error("El elemento con id 'NavBarGral' no se encontró.");
    }
};
