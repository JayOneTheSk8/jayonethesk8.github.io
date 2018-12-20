const classCache = {};

function findDirection(e) {
  let direction = e.wheelDelta > 0 ? 'up' : 'down';
  console.log(direction);
}

function changeNavbar(e) {
  debugger
  const nav = $j('.navbar');
  // if (nav) {
  //
  // }
}

window.addEventListener("wheel", findDirection);
window.addEventListener("resize", changeNavbar);
