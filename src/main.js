import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = `39475716-e1b9a363d760376814942c80f`;

const form = document.getElementById('search-form');
const listGallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a.lightbox-trigger');

listGallery.addEventListener('click', e => {
  if (e.target.classList.contains('lightbox-trigger')) {
    e.preventDefault();
    lightbox.open();
  }
});

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  const inputElement = document.querySelector('form input');
  const inputRef = encodeURIComponent(inputElement.value.trim());

  if (!inputRef) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a valid search term.',
      position: 'topRight',
    });
    return;
  }

  const loadingIndicator = document.querySelector('.loading-indicator');
  loadingIndicator.style.display = 'block';

  const mandatoryParams =
    '&image_type=photo&orientation=horizontal&safesearch=true';
  fetch(`${BASE_URL}?key=${API_KEY}&q=${inputRef}${mandatoryParams}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error('Network response was not ok');
      }
      return resp.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning({
          title: 'No Results',
          message: 'No images found for the given search.',
          position: 'topRight',
        });
      } else {
        markupElements(data);
      }
      loadingIndicator.style.display = 'none';
    })
    .catch(error => {
      console.error('Fetch error:', error);
      loadingIndicator.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message: 'An error occurred while fetching data.',
        position: 'topRight',
      });
    });
}

function markupElements(data) {
  const markup = data.hits
    .map(
      hit => `<div class="photo-card">
                <a href="${hit.largeImageURL}" class="lightbox-trigger">
                  <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" />
                </a>
                <div class="info">
                  <p class="info-item"><b>Likes: ${hit.likes}</b></p>
                  <p class="info-item"><b>Views: ${hit.views}</b></p>
                  <p class="info-item"><b>Comments: ${hit.comments}</b></p>
                  <p class="info-item"><b>Downloads: ${hit.downloads}</b></p>
                </div>
              </div>`
    )
    .join('');

  listGallery.innerHTML = markup;

  lightbox.refresh();
}
