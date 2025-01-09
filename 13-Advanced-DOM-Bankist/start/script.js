'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(getComputedStyle(btnCloseModal));
const header = document.querySelector('.header');
header.style.overflow = 'hidden';
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>';
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
// header.prepend(message); // added as first child
// header.append(message.cloneNode(true)); // Copy the message node with childe element
header.append(message);
// header.before(message); // insert the element before the header
// header.after(message); // insert the element after the header
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function (e) {
    e.preventDefault();
    message.remove();
  });
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// const logo = document.querySelector('.nav__logo');
// console.log(logo.getAttribute('designer'));
// console.log(logo.getAttribute('src'));

// console.log(logo.dataset.versionNumber);

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  e.preventDefault();
  const section1Coords = section1.getBoundingClientRect();
  console.log(section1Coords);

  // window.scrollTo({ // old method
  //   left: section1Coords.left + window.scrollX,
  //   top: section1Coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});
