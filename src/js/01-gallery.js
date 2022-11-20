import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryBox = document.querySelector('div.gallery');

function galleryTemplate(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="Image ${description}"
                />
            </a>
        </div>
        `;
    })
    .join('');
}

galleryBox.innerHTML = galleryTemplate(galleryItems);

new SimpleLightbox('div.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
