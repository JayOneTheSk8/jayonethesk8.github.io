let miniBar, navbar, hamburger, dropdownMenu, overlay;
let dropdown = 'closed';

const flip = (show, hide) => {
  show.show();
  hide.hide();
};

function changeNavbar(e) {
  if (navbar.width() < 800 && navbar.nodes[0].className !== "hidden") {
    flip(miniBar, navbar);
  } else if (miniBar.width() > 800) {
    flip(navbar, miniBar);
  }
}

function closeDropdown(e) {
  if (dropdown == "open") {
    dropdownMenu.addClass('hidden');
    dropdown = "closed"
  }
}

function findDirection(e) { //UFINISHED
  let direction = e.wheelDelta > 0 ? 'up' : 'down';
  console.log(direction);
}

function toggleDropdown(e) {
  if (dropdown === 'closed') {
    dropdownMenu.removeClass('hidden');
    dropdown = "open";
  } else {
    dropdownMenu.addClass('hidden');
    dropdown = "closed"
  }
}

window.addEventListener("wheel", findDirection); //UFINISHED
window.addEventListener("resize", changeNavbar);


document.addEventListener("DOMContentLoaded", (e) => {
  miniBar = $j('.navbar-reduced');
  navbar = $j('.navbar');
  hamburger = $j('.hamburger-icon');
  dropdownMenu = $j('.dropdown-links');
  overlay = $j('.screen-overlay');
  infoScreens = $j('.info-screens');
  overlay.on('click', closeDropdown);
  infoScreens.on('click', closeDropdown);
  hamburger.on('click', toggleDropdown);
  if (navbar.width() < 800) {
    flip(miniBar, navbar);
  } else {
    flip(navbar, miniBar);
  }
});
