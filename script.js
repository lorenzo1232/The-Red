
function setMode(mode) {
  const ring = document.getElementById('logo');
  const text = document.getElementById('loadingText');

  ring.className = 'ring';
  text.classList.remove('show-text');

  if (mode === 'splash') {
    ring.classList.add('pulse-splash');
  } else if (mode === 'loading') {
    ring.classList.add('pulse-loading');
    text.classList.add('show-text');
  } else if (mode === 'active') {
    ring.classList.add('pulse-active');
  }
}
setMode('splash');
