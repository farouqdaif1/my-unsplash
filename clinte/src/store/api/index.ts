import axios from "axios";
const API_URL = "http://localhost:5000/api/images";
export const fetchImages = () => axios.get<Image[]>(API_URL);
export const deleteImage = (id: string) => axios.delete(`${API_URL}/${id}`);
export const createImage = (image: Image) => axios.post<Image>(API_URL, image);