import api from './axiosInstance';

class CategoryDAO {
    async getCategoryById(productId) {
        console.log('Get category by id : ' + productId);
        try {
            const response = await api.get('/Categories/' + productId);
            return response.data.name;
        } catch (error) {
            console.error('Error fetching category: ', error.toString());
        }
        return [];
    }
}

export default new CategoryDAO();