import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgContainer = document.querySelector('.gallery')

const imgElement = galleryItems.reduce((acum, item) => {
    return (acum += `<a class="gallery__item" href="${item.original}"><img class="gallery__image"
      src = "${item.preview}"
      alt="${item.description}"/></a>`);
}, '')
    
  ;

imgContainer.insertAdjacentHTML('beforeend', imgElement);


let lightbox = new SimpleLightbox('.gallery a',
{ captionType: 'attr', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250, });



console.log(galleryItems);
console.log(lightbox);