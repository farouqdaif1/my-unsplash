import axios from "axios";
const API_URL = "http://localhost:5000/api/images";
export const fetchImages = () => axios.get<Image[]>(API_URL);
export const searchImages = (searchTerm:string) => axios.get<Image[]>(`${API_URL}/search/${searchTerm}`);
export const deleteImage = (id: string) => axios.delete(`${API_URL}/${id}`);
export const createImage = (image: Image) => axios.post<Image>(API_URL, image);