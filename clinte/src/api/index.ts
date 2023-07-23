import axios from 'axios';
const url = 'http://localhost:5000/images';

export const fetchImages = () => axios.get(url);
export const createImage = (newImage :ImageData) => axios.post(url, newImage);
export const deleteImage = (id:number) => axios.delete(`${url}/${id}`);
