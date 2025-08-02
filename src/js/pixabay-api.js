import axios from 'axios';

const API_KEY = '51592963-48219a683fda327b2179667c8';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw new Error('Failed to fetch images from Pixabay.');
    });
}
