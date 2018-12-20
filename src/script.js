let miniBar, navbar;

function findDirection(e) {
  let direction = e.wheelDelta > 0 ? 'up' : 'down';
  console.log(direction);
}

function changeNavbar(e) {
  console.log(navbar.width());
  // debugger
  // if (nav) {
  //
  // }
}

function flip(show, hide) {
  show.show();
  hide.hide();
}

window.addEventListener("wheel", findDirection);
window.addEventListener("resize", changeNavbar);

document.addEventListener("DOMContentLoaded", (e) => {
  miniBar = $j('.navbar-reduced');
  navbar = $j('.navbar');
  miniBar.hide();
  // if (navbar.width() < 800) {
  //   navbar
  // }
});
