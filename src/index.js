let input = [];
const secretCode = 'makon';
const body = document.querySelector('body');
const hint = document.querySelector('.hidden');

function handleKeyPress(e) {
  input.push(e.key);
  input.splice(-secretCode.length - 1, input.length - secretCode.length);
  //console.log(input);
  if (input.join('') === secretCode) {
    const color = Math.random() * 360;
    body.style.background = `hsl(${color}, 100% , 50%)`;
    body.style.color = `hsl(${color+180}, 100% , 50%)`;
    hint.style.color = `hsl(${color}, 100% , 50%)`;
  }
}

document.addEventListener('keydown', handleKeyPress);