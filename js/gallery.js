const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// 1.Создание и рендер разметки по массиву данных galleryItems из 
// app.js и предоставленному шаблону.
const galleryRef = document.querySelector('.js-gallery')
const lightboxRef = document.querySelector('.js-lightbox')
const overlayRef = document.querySelector('.lightbox__overlay')
const imageRef = document.querySelector('.lightbox__image')
const closeButtonRef = document.querySelector('.lightbox__button')

const galleryList = createList()
galleryRef.insertAdjacentHTML('beforeend', galleryList);

function createList() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}"
    data-source="${original}" alt="${description}" />
    </a></li>`;
    })
    .join('');
}

// 3.Открытие модального окна по клику на элементе галереи.
galleryRef.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();
  // 2.Реализация делегирования на галерее ul.js-gallery 
  // и получение url большого изображения.
  // galleryRef.addEventListener('click', onClick)
  
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  lightboxRef.classList.add('is-open');

  // 4.Подмена значения атрибута src элемента img.lightbox__image.
  imageRef.src = event.target.dataset.source;

  document.addEventListener('keydown', onEscKeyPress);
  document.addEventListener('keydown', handleKeydown);
}

// 5.Закрытие модального окна по клику на кнопку 
// button[data - action= "close-lightbox"].
closeButtonRef.addEventListener('click', onCloseModal);

function onCloseModal(event) {
  lightboxRef.classList.remove('is-open');

  // 6.Очистка значения атрибута src элемента img.lightbox__image. 
  //   Это необходимо для того, чтобы при следующем открытии модального 
  //   окна, пока грузится изображение, мы не видели предыдущее.
  imageRef.src = '';

  document.removeEventListener('keydown', onEscKeyPress);
  document.removeEventListener('keydown', handleKeydown);
}

// 1.Закрытие модального окна по клику на div.lightbox__overlay.
overlayRef.addEventListener('click', onClickOverlay);

function onClickOverlay(event) {
  onCloseModal()
}

// 2.Закрытие модального окна по нажатию клавиши ESC.
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

// 3.Пролистывание изображений галереи в открытом модальном 
//   окне клавишами "влево" и "вправо".
function handleKeydown(e) {
  let currentIndex = 0;
  galleryItems.forEach(img => {
    if (img.original === imageRef.src) {
      currentIndex = galleryItems.indexOf(img);
    }
  });

  let nextIndex = currentIndex + 1;
  let previousIndex = currentIndex - 1;
  if (e.code === 'ArrowRight') {
    if (nextIndex >= galleryItems.length) {
      nextIndex = 0;
    }
    imageRef.src = galleryItems[nextIndex].original;
  }
  if (e.code === 'ArrowLeft') {
    if (previousIndex < 0) {
      previousIndex = galleryItems.length - 1;
    }
    imageRef.src = galleryItems[previousIndex].original;
  }
}
