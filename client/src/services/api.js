import axios from 'axios';

// Instance axios qui pointe vers notre API Express
const api = axios.create({
  baseURL: import.meta.env.DEV ? 'http://localhost:3001/api' : '/api',
});

// ===== CATEGORIES =====
export const getCategories = () => api.get('/categories');

// ===== ARTISANS =====
export const getArtisans = () => api.get('/artisans');
export const getTopArtisans = () => api.get('/artisans/top');
export const getArtisanById = (id) => api.get(`/artisans/${id}`);
export const searchArtisans = (terme) => api.get(`/artisans/recherche/${terme}`);
export const getArtisansByCategorie = (nom) => api.get(`/artisans/categorie/${nom}`);
// ===== CONTACT =====
export const envoyerContact = (data) => api.post('/contact', data);

export default api;