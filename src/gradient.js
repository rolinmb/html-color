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
