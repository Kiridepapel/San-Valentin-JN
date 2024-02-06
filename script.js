const button = document.getElementById('darkModeBtn');

button.addEventListener('click', () => {
  const htmlElement = document.documentElement;
  htmlElement.classList.toggle('dark');
})