import axios from "axios";
const API_URL = "http://localhost:5000/api/images";
export const fetchImages = () => axios.get(API_URL);
