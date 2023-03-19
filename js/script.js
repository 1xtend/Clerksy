const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navbarList = document.querySelector('.navbar__list');
const body = document.body;

burger.addEventListener('click', (e) => {
  burger.classList.toggle('is-active');
  navbar.classList.toggle('is-active');
  body.classList.toggle('is-fixed');

  navbar.addEventListener('click', (e) => {
    if (e.target !== navbarList) {
      burger.classList.remove('is-active');
      navbar.classList.remove('is-active');
      body.classList.remove('is-fixed');
    }
  });
});
