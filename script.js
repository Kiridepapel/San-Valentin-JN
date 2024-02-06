// No options
const noModes = [
  "No",
  "¿Estás segura?",
  "¿De verdad?",
  "¿De verdad estás de acuerdo?",
  "Por favor, di que sí",
  "Piénsalo bien",
  "Si dices que no, estaré muy triste",
  "Estaré muy muy triste",
  "Estaré muy muy muy triste",
  "Estaré muy muy muy muy triste",
  "Ok, dejaré de preguntar...",
  "Es broma, POR FAVOR DI QUE SÍ",
  "Estaré muy muy muy muy muy triste",
  "Me estás rompiendo el corazón ;(",
  "Dí que sí, último aviso",
  "Ok, no te presionaré más",
];
const imgModes = [
  "assets/1.gif",
  "assets/2.gif",
  "assets/3.gif",
  "assets/4.gif",
  "assets/5.gif",
  "assets/6.gif",
  "assets/7.gif",
  "assets/8.gif",
  "assets/9.gif",
];
const siButton = document.getElementById("siBtn");
let siTextSize = 1; // aumenta en 16 cada vez que se presiona el botón de no
const noButton = document.getElementById("noBtn");
const img = document.getElementById("img-question");
let noIndex = 1;
let imgIndex = 1;
noButton.addEventListener("click", () => {
  noButton.textContent = noModes[noIndex];
  img.src = imgModes[imgIndex];
  noIndex = (noIndex + 1) % noModes.length;
  imgIndex = (imgIndex + 1) % imgModes.length;
  siTextSize += 1;
  siButton.style.fontSize = `${siTextSize}rem`;
});

// Dark mode
const button = document.getElementById("darkModeBtn");
button.addEventListener("click", () => {
  const htmlElement = document.documentElement;
  htmlElement.classList.toggle("dark");
});
