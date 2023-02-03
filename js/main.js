const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.setAttribute('style', 'display: block !important');
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

const menuItem = document.querySelectorAll('.menuItem');
menuItem.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);

// email validation
const form = document.querySelector('#form-container');
const emailInput = document.querySelector('#box-input-email');
const errorMsg = document.querySelector('#errorMsg');

form.addEventListener('submit', (event) => {
  if (emailInput.value.toLowerCase() !== emailInput.value) {
    errorMsg.innerHTML = 'Email must be in lowercase';
    event.preventDefault();
    errorMsg.style.display = 'block';
  } else {
    errorMsg.innerHTML = '';
    errorMsg.style.display = 'none';
  }
});