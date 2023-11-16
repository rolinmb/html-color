var tLast;
const interval = 1000;
const letters = "0123456789ABCDEF";
const canvas = document.getElementById("clr-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getRandomColor() {
  let clr = "#";
  for (let i = 0; i < 6; i++) {
    clr += letters[Math.floor(Math.random()*16)];
  }
  return clr;
}

function updateGradient() {
  const grad = "linear-gradient("+getRandomColor()+","+getRandomColor()+")";
  document.body.style.background = grad;
}

function handleResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  updateGradient();
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
    window.addEventListener("resize", handleResize);
    tLast = performance.now();
    animate();
  }
}

init();
