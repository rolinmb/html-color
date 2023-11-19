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

const canvas = document.getElementById("clr-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function updateCanvasColor() {
  ctx.fillStyle = randCssColor();
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function handleResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  updateCanvasColor();
}

function animate() {
  requestAnimationFrame(animate);
  const tNow = performance.now();
  const tDelta = tNow - tLast;
  if (tDelta > interval) {
    tLast = tNow;
    updateCanvasColor();
  }
}

function init() {
  window.onload = function() {
    window.addEventListener("resize", handleResize);
    updateCanvasColor();
    tLast = performance.now();
    animate();
  }
}

init();
