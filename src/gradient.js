var tLast;
const interval = 1000;
const letters = "0123456789ABCDEF";

function randCssColor() {
  let c = "#";
  for (let i = 0; i < 6; i++) {
    c += letters[Math.floor(Math.random()*16)];
  }
  return c;
}

function updateGradient() {
  const newColor = "linear-gradient("+randCssColor()+","+randCssColor()+")";
  document.documentElement.style.background = newColor;
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
  document.addEventListener("DOMContentLoaded", function() {
    tLast = performance.now();
    animate();
  });
}

init();
