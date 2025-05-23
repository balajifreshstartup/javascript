'use strict';
const container = document.querySelector('.countries');
container.style.opacity = 1;
const divs = document.querySelectorAll('.child_div');
// const divs = document.getElementsByClassName('child_div');
divs[0].classList.add('first');

const parentDiv = document.createElement('div');
parentDiv.classList.add('parentElement');
divs[0].insertAdjacentElement('beforebegin', parentDiv);
Array.from(divs).forEach(div => {
  parentDiv.insertAdjacentElement('beforeend', div);
});
