// V2
document.getElementById('menuButton').addEventListener('click', function() {
    document.querySelector('.navBar').classList.add('expanded');
    document.getElementById('menuButton').classList.remove('btn-menu-img');
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.querySelector('.navBar').classList.remove('expanded');
    document.getElementById('menuButton').classList.add('btn-menu-img');
});
