import axios from 'axios';

const BASE_URL = 'http://localhost:8000/menu';

const getAllProductListItems = () =>
  axios.get(BASE_URL).then(response => response.data);

const getItemById = id =>
  axios.get(`${BASE_URL}/${id}`).then(response => response.data);

const delemeProductListItem = id =>
  axios.delete(`${BASE_URL}/${id}`).then(response => response.status === 200);

const addProductListItem = item =>
  axios.post(BASE_URL, item).then(response => response.data);

export {
  getAllProductListItems,
  getItemById,
  delemeProductListItem,
  addProductListItem,
};
