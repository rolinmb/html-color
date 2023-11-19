var tLast;
const interval = 42;
let hue = 0;

function updateGradient() {
  hue = (hue + 1) % 360;
  const c1 = "hsl(" + hue + ",100%,50%)";
  const c2 = "hsl(" + ((hue + 180) % 360) + ",100%,50%)";
  const newColor = "linear-gradient(45deg," + c1 + "," + c2 + ")";
  document.body.style.background = newColor;
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
  document.addEventListener("DOMContentLoaded", function () {
    tLast = performance.now();
    animate();
  });
}

init();
