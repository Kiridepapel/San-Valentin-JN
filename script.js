// No options
const noModes = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Are you positive?",
    "Pookie please",
    "Just think about it",
    "If you say no, I'll be very sad",
    "I'll be very very sad",
    "I'll be very very very sad",
    "I'll be very very very very sad",
    "Ok fine, I'll stop asking...",
    "Just kidding, PLEASE SAY YES",
    "I'll be very very very very very sad",
    "You're breaking my heart ;("
  ];
const noButton = document.getElementById('noBtn');
let noIndex = 1;
noButton.addEventListener('click', () => {
  noButton.textContent = noModes[noIndex];
  noIndex = (noIndex + 1) % noModes.length;
});

// Dark mode
const button = document.getElementById('darkModeBtn');
button.addEventListener('click', () => {
  const htmlElement = document.documentElement;
  htmlElement.classList.toggle('dark');
})