// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const imageListEl = document.querySelector('.gallery');
imageListEl.style.listStyle = "none";

const createGalleryEl = ({
    preview,
    description,
    original,
 }) =>
 {
        return `<li class="gallery__item">
 <a class="gallery__link" href="${original}">
 <img 
 class="gallery__image"
 src="${preview}" 
  alt="${description}">
 </a>
 </li>`;
    };

const galleryCardsList = galleryItems.map((el) => createGalleryEl(el))
    
imageListEl.insertAdjacentHTML("afterbegin", galleryCardsList.join(""))

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    aptionPosition: "bottom",
});
 