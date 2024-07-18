import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_DIRECTUS_API_URL;

interface DirectusItem {
  id: number;
  name: string;
}

export const fetchItems = async (collection: string = 'global'): Promise<DirectusItem[]> => {
  try {
    const response = await axios.get(`${API_URL}/items/${collection}`);
    console.log('Directus response:', response.data); // Log the Directus response
    return response.data.data;
  } catch (error) {
    console.error('Error fetching items from Directus:', error);
    return [];
  }
};