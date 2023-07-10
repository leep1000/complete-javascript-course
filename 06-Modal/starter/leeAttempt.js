'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');
console.log(btnsOpenModel);

// Query Selector only selects the first one that matches what is inside the brackets.
// Therefore, use querySelectorAll instead

function showModelOnClick() {
  console.log('Button Clicked!');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // Alternate, but less efficient way to do the same
  modal.getElementsByClassName.display = 'block';
}

function hideModelOnClick() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener('click', showModelOnClick);
}

btnCloseModel.addEventListener('click', hideModelOnClick);
overlay.addEventListener('click', hideModelOnClick);

document.addEventListener('keydown', function (e) {
  //console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModelOnClick();
  }
});
