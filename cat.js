
// Cache what we need
const catLoader = document.querySelector('.cat-loading');
const catGallery = document.querySelector('.cat-gallery');
let catURL = 'https://api.thecatapi.com/v1/images/search';

function init() {
  const catImg = document.querySelector('.cat-image');

  catImg.addEventListener('load', () => {
    catLoader.classList.remove('show');
    catImg.classList.add('show');
  });

  const newCatBtn = document.querySelector('.new-btn');
  newCatBtn.addEventListener('click', () => {
    showNewCat(catImg);
  });

  const saveCatBtn = document.querySelector('.save-btn');
  saveCatBtn.addEventListener('click', () => {
    saveCat(catImg.src);
  });

  catGallery.addEventListener('click', checkAndDelete);

  // if any saved cats are in local storage, show them
  getLocalCats();

  // get an initial cat to show
  showNewCat(catImg);
}

// Request new cat from API and display it
async function showNewCat(catImg) {
  catImg.classList.remove('show');
  catLoader.classList.add('show');

  const res = await fetch(catURL);
  const data = await res.json();

  catImg.src = data[0].url;
}

// Add cats to favourites list
function saveCat(url) {
  // console.log(catGallery.children);
  document.querySelector('.fave-title').style.visibility = 'visible';

  if(!isDuplicate(url)) {
    showInFavourites(url);
    saveLocalCats(url);
  } else {
    console.log('duplicate!');
  }
}

// Prevent adding duplicate images to Favourites
function isDuplicate(url) {
  let catArray;
  if(localStorage.getItem('catArray') === null) {
    return false;
  } else {
    catArray = JSON.parse(localStorage.getItem('catArray'));
  }
  if(catArray.indexOf(url) === -1) {
    return false;
  }
  return true;
}

// Display cat picture in favourites section
function showInFavourites(url) {
  // Create a figure element ...
  const newFigure = document.createElement('figure');
  newFigure.classList.add('gallery-item');

  // ... then create an img element
  const newImg = document.createElement('img');
  newImg.classList.add('gallery-img');
  newImg.src = url;
  newImg.alt = 'lovely cat';

  // .. then create an overlay ...
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.innerHTML = '<i class="icon fas fa-times"></i>';

  // ... then mash them together and append to the DOM
  newFigure.appendChild(newImg);
  newFigure.appendChild(overlay);
  catGallery.appendChild(newFigure);
}

// Save favourites list to local storage
function saveLocalCats(cat) {
  let catArray;
  if(localStorage.getItem('catArray') === null) {
    catArray = []
  } else {
    catArray = JSON.parse(localStorage.getItem('catArray'));
  }
  catArray.push(cat);
  localStorage.setItem('catArray', JSON.stringify(catArray));
}

// Retrieve favourites list from local storage
function getLocalCats() {
  let catArray;
  if(localStorage.getItem('catArray') === null) {
    catArray = [];
  } else {
    catArray = JSON.parse(localStorage.getItem('catArray'));
  }
  document.querySelector('.fave-title').style.visibility = 'visible';

  catArray.forEach(cat => {
    showInFavourites(cat);
  });
}

// Remove cat from local storage
function deleteLocalCat(url) {
  let catArray = JSON.parse(localStorage.getItem('catArray'));
  const index = catArray.indexOf(url);
  catArray.splice(index, 1);
  localStorage.setItem('catArray', JSON.stringify(catArray));
}

// Click handler for images in Favourites section
function checkAndDelete(e) {
  if(e.target.classList[0] === 'icon') {
    const removeURL = e.target.parentElement.previousSibling.src;
    const item = e.target.parentElement.parentElement;
    console.log(item);
    item.classList.add('deleted');
    item.addEventListener('transitionend', () => {
      catGallery.removeChild(e.target.parentElement.parentElement);
      deleteLocalCat(removeURL);
    });
  }
  if(e.target.classList[0] === 'gallery-img') {
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content');
    const modalCaption = document.querySelector('.caption');
    const targetURL = e.target.src;
    const targetAlt = e.target.alt;

    modal.style.display = 'block';
    modalImg.src = targetURL;
    modalCaption.innerHTML = targetAlt;

    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    })
    
  }
}

init();

