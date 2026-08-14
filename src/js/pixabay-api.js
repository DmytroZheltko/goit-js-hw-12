import axios from 'axios';

const API_KEY = '57130797-780b6a86ac76cc845781f498c';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
    page: page,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
