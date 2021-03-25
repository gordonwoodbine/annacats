
const catImg = document.querySelector('.cat-image');
const catLoader = document.querySelector('.cat-loading');
const catGallery = document.querySelector('.cat-gallery');
let catURL = 'https://api.thecatapi.com/v1/images/search';

async function init() {
  catImg.addEventListener('load', () => {
    catLoader.classList.remove('show');
    catImg.classList.add('show');
  });

  const newCatBtn = document.querySelector('.new-btn');
  newCatBtn.addEventListener('click', () => {
    showNewCat();
  });

  const saveCatBtn = document.querySelector('.save-btn');
  saveCatBtn.addEventListener('click', saveCat);

  showNewCat();
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

function saveCat() {
  // console.log(catImg.src);
  document.querySelector('.fave-title').style.visibility = 'visible';
  const newFigure = document.createElement('figure');
  newFigure.classList.add('gallery-item');

  const newImg = document.createElement('img');
  newImg.classList.add('gallery-img');
  newImg.src = catImg.src;
  newImg.alt = 'lovely cat';

  newFigure.appendChild(newImg);
  catGallery.appendChild(newFigure);
}

init();

