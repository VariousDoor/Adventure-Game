const keyboard = {
  w: false,
  a: false,
  s: false,
  d: false,
  arrowup: false,
  arrowdown: false,
  arrowleft: false,
  arrowright: false,
  spacebar: false
};
document.addEventListener('keydown', (e) => {
  if(e.code === "Space") keyboard.spacebar = true;
 else keyboard[e.key.toLowerCase()] = true;
});
document.addEventListener('keyup', (e) => {
  if(e.code === "Space") keyboard.spacebar = false;
 else keyboard[e.key.toLowerCase()] = false;
});