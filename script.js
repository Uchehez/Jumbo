const menuBar = document.getElementById('menubar');
const close = document.getElementById('close');
const navBar = document.getElementById('navbar');

if (menuBar) {
  menuBar.addEventListener('click', () => {
    navBar.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    navBar.classList.remove('active');
  })
}