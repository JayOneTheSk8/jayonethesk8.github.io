let miniBar, navbar;

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

window.addEventListener("wheel", findDirection);
window.addEventListener("resize", changeNavbar);

document.addEventListener("DOMContentLoaded", (e) => {
  miniBar = $j('.navbar-reduced');
  navbar = $j('.navbar');
  if (navbar.width() < 800) {
    flip(miniBar, navbar);
  } else {
    flip(navbar, miniBar);
  }
});
