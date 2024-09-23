import { createApi } from 'unsplash-js';

const main = document.querySelector('#main');
const unsplash = createApi({
  accessKey: 'SPecjyz-Kbkks5Ar5KTFXRqtQtkmZXTD_ulKEP3bZzc',
});

unsplash.search
  .getPhotos({
    query: 'Classical Arts',
    page: 1,
    perPage: 16,
    orientation: 'portrait',
  })
   .then((result) => {
     if (result.type == 'success') {
       const photos = result.response.results;
       const getUrls = photos.map((i) => {
         return `<img src="${i.urls.small}" />`;
        });
         main.innerHTML = getUrls.join('');
      }
    });