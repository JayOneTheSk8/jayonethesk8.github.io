function findDirection(e) {
  let direction = e.wheelDelta > 0 ? 'up' : 'down';
}

window.addEventListener("wheel", findDirection);
