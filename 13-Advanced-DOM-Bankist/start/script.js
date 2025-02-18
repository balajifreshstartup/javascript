'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tab = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContant = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

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

// Button scroll
btnScrollTo.addEventListener('click', e => {
  e.preventDefault();
  const section1Coords = section1.getBoundingClientRect();
  console.log(section1Coords);

  // window.scrollTo({
  //   // old method
  //   left: section1Coords.left + window.scrollX,
  //   top: section1Coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Event Delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component

tabContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  // Active
  tab.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  tabContant.forEach(c => c.classList.remove('operations__content--active'));

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Nav Hover effect
function handleHover(e) {
  const link = e.target;
  const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  const logo = link.closest('.nav').querySelector('.nav__logo');
  siblings.forEach(s => {
    if (link !== s) s.style.opacity = this;
  });
  logo.style.opacity = this;
}
nav.addEventListener('mouseover', handleHover.bind('0.5'));
nav.addEventListener('mouseout', handleHover.bind('1'));

/* window.addEventListener('scroll', function () {
  const initialCoords = section1.getBoundingClientRect();
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}); */
// * InterSectionObserver
// const obsCallBack = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMaring: `-${navHeight}px`,
});
headerObserver.observe(header);

const allSections = document.querySelectorAll('section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};
const sectionObserer = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(section => {
  // section.classList.add('section--hidden');
  sectionObserer.observe(section);
});

const imgTarget = document.querySelectorAll('img[data-src]');

const imgObCallBack = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove('lazy-img');
  entry.target.addEventListener('load', () =>
    entry.target.classList.remove('lazy-img')
  );

  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(imgObCallBack, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

imgTarget.forEach(function (img) {
  imgObserver.observe(img);
});

// Slider
function slider() {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let currentSlider = 0;
  const maxSlider = slides.length;

  const goToSlide = slide => {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = () => {
    if (currentSlider === maxSlider - 1) {
      currentSlider = 0;
    } else {
      currentSlider++;
    }
    goToSlide(currentSlider);
    activeDots(currentSlider);
  };

  const preSlide = () => {
    if (currentSlider === 0) {
      currentSlider = maxSlider - 1;
    } else {
      currentSlider--;
    }
    goToSlide(currentSlider);
    activeDots(currentSlider);
  };
  function createDots() {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  }
  function activeDots(slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  }

  function init() {
    goToSlide(0);
    createDots();
    activeDots(0);
  }

  init();
  // Event Handler
  btnLeft.addEventListener('click', preSlide);
  btnRight.addEventListener('click', nextSlide);
  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowRight' && nextSlide(); // shortcircuit
    e.key === 'ArrowLeft' && preSlide(); // shortcircuit
  });
  dotContainer.addEventListener('click', e => {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDots(slide);
    }
  });
}
slider();
//* Traversing
// const h1 = document.querySelector('h1');
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
// rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log('Nav List', e.target);
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   console.log('Nav Link', e.target);
//   this.style.backgroundColor = randomColor();
//   // e.stopPropagation();
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     console.log('NAv', e.target);
//     this.style.backgroundColor = randomColor();
//   },
//   true
// );
