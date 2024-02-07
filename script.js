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
  "assets/personalized/1.webp",
  "assets/personalized/2.webp",
  "assets/personalized/3.webp",
  "assets/personalized/4.webp",
  "assets/personalized/5.webp",
];
const noContainer = document.getElementById("container-no");
const siContainer = document.getElementById("container-si");
const siButton = document.getElementById("siBtn");
const noButton = document.getElementById("noBtn");
const img = document.getElementById("img-question");
let noIndex = 1;
let imgIndex = 1;
let siTextSize = 1;
let paddingTop = 80; // va a disminuir de 5 en 5

noButton.addEventListener("click", () => {
  noButton.textContent = noModes[noIndex];
  img.src = imgModes[imgIndex];
  noIndex = (noIndex + 1) % noModes.length;
  imgIndex = (imgIndex + 1) % imgModes.length;
  siTextSize += 1;
  if (siTextSize > 5) {
    siTextSize += 2;
  }
  siButton.style.fontSize = `${siTextSize}rem`;
  paddingTop -= 5;
  noContainer.style.paddingTop = `${paddingTop}px`;
  if (siTextSize > 3) {
    siButton.style.padding = "8px 32px";
  }
});

siButton.addEventListener("click", () => {
  noContainer.classList.toggle("hidden");
  siContainer.classList.toggle("hidden");
  // ponerle display none a noContainer y display flex a siContainer
  // noContainer.style.display = "none";
  // siContainer.style.display = "flex";
  console.log("click");
});

// Dark mode
const button = document.getElementById("darkModeBtn");
button.addEventListener("click", () => {
  const htmlElement = document.documentElement;
  htmlElement.classList.toggle("dark");
});
