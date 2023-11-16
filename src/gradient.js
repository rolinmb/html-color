var tLast;
const interval = 1000;
const letters = "0123456789ABCDEF";

function getRandomColor() {
  let clr = "#";
  for (let i = 0; i < 6; i++) {
    clr += letters[Math.floor(Math.random()*16)];
  }
  return clr;
}

function updateGradient() {
  const grad = "linear-gradient("+getRandomColor()+","+getRandomColor()+")";
  document.documentElement.style.background = grad;
}

function animate() {
  requestAnimationFrame(animate);
  const tNow = performance.now();
  const tDelta = tNow - tLast;
  if (tDelta > interval) {
    tLast = tNow;
    updateGradient();
  }
}

function init() {
  window.onload = function() {
    tLast = performance.now();
    animate();
  }
}

init();
