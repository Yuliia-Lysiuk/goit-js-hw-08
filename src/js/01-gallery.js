// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryConteiner = document.querySelector(".gallery");
galleryConteiner.insertAdjacentHTML("beforeend", onMakeGallery(galleryItems));

function onMakeGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
        `<li><a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a></li>`).join(" ");
}

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});