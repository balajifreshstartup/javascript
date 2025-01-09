document.addEventListener('DOMContentLoaded', function() {
    const updateEleText = id => content => document.querySelector(`#${id}`).textContent = content;
    const updateHeaderText = updateEleText('header');
    updateHeaderText('Hello Mate');
  });