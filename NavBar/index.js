// V2
const navItems = ["csaId","pflId", "msjId","cmrId","ajsId"];

document.getElementById('menuButton').addEventListener('click', function() {
    document.querySelector('.navBar').classList.add('expanded');
    navItems.forEach(id => {
        const element = document.getElementById(id);
        element.classList.add("expanded");
        element.classList.remove("notExpanded"); 
    });
    document.getElementById('menuButton').classList.remove('btn-menu-img');
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.querySelector('.navBar').classList.remove('expanded');
    navItems.forEach(id => {
        const element = document.getElementById(id);
        element.classList.add("notExpanded");
        element.classList.remove("expanded"); 
    });
    document.getElementById('menuButton').classList.add('btn-menu-img');
});

