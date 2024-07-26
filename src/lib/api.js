import axios from 'axios';

const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const fetchRandomCocktails = async () => {
    try {
        const requests = Array.from({ length: 5 }, () => axios.get(`${API_BASE_URL}/random.php`));
        const responses = await Promise.all(requests);
        return responses.map(response => response.data.drinks[0]);
    } catch (error) {
        console.error('Error fetching random cocktails:', error);
        return [];
    }
};

export const searchCocktailsByName = async (name) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/search.php?s=${name}`);
        return response.data.drinks || [];
    } catch (error) {
        console.error('Error searching cocktails by name:', error);
        return [];
    }
};
