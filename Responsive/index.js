//V4 

const menu = document.getElementById('menu');
const navItems = ["list1", "list2", "list3", "list4"];
const medida = window.matchMedia("(max-width: 900px)");
const modal = document.getElementById("modal-cont");
const navP1 = document.getElementById("infoSup");
const navP2 = document.getElementById("infoInf");
const contMenu = document.getElementById('contMenu');
const contInfo = document.getElementById('contInfo')
const btnCerr = document.getElementById('btnCerr');
const navItemsModal = ["modalList1","modalList2","modalList3","modalList4"];

let i = 0;


function menNov(e) {
  if (e.matches) {
    navItems.forEach(id => {
      const element = document.getElementById(id);
      element.classList.add("desactive");
      element.classList.remove("active"); 
    });
    menu.classList.add("active");
    menu.classList.remove("desactive");
  } else {
    navItems.forEach(id => {
      const element = document.getElementById(id);
      element.classList.remove("desactive");
      element.classList.add("active");
    });
    menu.classList.remove("active");
    menu.classList.add("desactive");
  }
}

medida.addEventListener('change', menNov);
menNov(medida);


menu.addEventListener("click", function () {
    if (i == 0) {
        modal.classList.add('modalAct');
        navP1.classList.add('desactiveCont');
        navP2.classList.add('desactiveCont');
        modal.classList.remove('modalDsc');
        navItemsModal.forEach(id => {
            const elementModal = document.getElementById(id);
            elementModal.classList.remove("desactive");
            elementModal.classList.add("active"); 
          });
        i++;
    }
});

btnCerr.addEventListener("click", function () {
    if (i == 1) {
        modal.classList.add('modalDsc');
        navP1.classList.remove('desactiveCont');
        modal.classList.remove('modalAct');
        navP2.classList.remove('desactiveCont');
        navItemsModal.forEach(id => {
            const elementModal = document.getElementById(id);
            elementModal.classList.add("desactive");
            elementModal.classList.remove("active"); 
          });
        i--;
    }
});

function checkWindowSize() {
    if (window.innerWidth > 900) {
        if (modal.classList.contains('modalAct')) {
            modal.classList.add('modalDsc');
            modal.classList.remove('modalAct');
            navP1.classList.remove('desactiveCont');
            navP2.classList.remove('desactiveCont');
            navItemsModal.forEach(id => {
                const elementModal = document.getElementById(id);
                elementModal.classList.add("desactive");
                elementModal.classList.remove("active"); 
            });
            i = 0; 
        }
    }
}


window.addEventListener('resize', checkWindowSize);

checkWindowSize();

