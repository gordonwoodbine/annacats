
const catImg = document.querySelector('.cat-image');
const catLoader = document.querySelector('.cat-loading');
// let dogURL = 'https://dog.ceo/api/breeds/image/random';
let catURL = 'https://api.thecatapi.com/v1/images/search';

// Populate Select with list from breeds api

async function init() {
  
  

  catImg.addEventListener('load', () => {
    catLoader.classList.remove('show');
    catImg.classList.add('show');
  });

  const catButton = document.querySelector('.new-btn');
  catButton.addEventListener('click', () => {
    showNewCat();
  })
}

async function showNewCat() {
  catImg.classList.remove('show');
  catLoader.classList.add('show');
  
  // const res = await fetch(dogURL);
  const res = await fetch(catURL);
  const data = await res.json();
  // console.log(data[0].url);

  catImg.src = data[0].url;
}

init();

