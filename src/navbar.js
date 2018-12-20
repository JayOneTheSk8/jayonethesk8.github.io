let miniBar, navbar, hamburger, dropdownMenu;
let dropdown = 'closed';

const flip = (show, hide) => {
  show.show();
  hide.hide();
};

function findDirection(e) {
  let direction = e.wheelDelta > 0 ? 'up' : 'down';
  console.log(direction);
}

function changeNavbar(e) {
  if (navbar.width() < 800 && navbar.nodes[0].className !== "hidden") {
    flip(miniBar, navbar);
  } else if (miniBar.width() > 800) {
    flip(navbar, miniBar);
  }
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

window.addEventListener("wheel", findDirection);
window.addEventListener("resize", changeNavbar);


document.addEventListener("DOMContentLoaded", (e) => {
  miniBar = $j('.navbar-reduced');
  navbar = $j('.navbar');
  hamburger = $j('.hamburger-icon');
  dropdownMenu = $j('.dropdown-links');
  hamburger.on('click', toggleDropdown);
  if (navbar.width() < 800) {
    flip(miniBar, navbar);
  } else {
    flip(navbar, miniBar);
  }
});
