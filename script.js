// const initialText = "Hello, ";
const textArray = ["I am a Designer", "Development apps", "I make ERP using odoo"];
const colors = ["red", "orange", "yellow"];
const delay = 200; // Delay between each character (in milliseconds)

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typewriter = document.getElementById('typewriter');

function type() {
  const currentText = textArray[textIndex];
  const currentColor = colors[textIndex];

  // if (isDeleting) {
  //   typewriter.innerHTML = initialText + currentText.substring(0, charIndex - 1);
  //   charIndex--;
  // } else {
  //   typewriter.innerHTML = initialText + `<span style="color: ${currentColor}">${currentText.substring(0, charIndex + 1)}</span>`;
  //   charIndex++;
  // }

  if (isDeleting) {
    typewriter.innerHTML = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriter.innerHTML = `<span style="color: ${currentColor}">${currentText.substring(0, charIndex + 1)}</span>`;
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, delay + 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex++;
    if (textIndex === textArray.length) {
      textIndex = 0;
    }
    setTimeout(type, 500);
  } else {
    setTimeout(type, delay);
  }
}

window.addEventListener('DOMContentLoaded', type);
