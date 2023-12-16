import api from './axiosInstance';

class CategoryDAO {
    async getCategoryById(categoryId) {
        console.log('Get category by id : ' + categoryId);
        try {
            const response = await api.get('/Categories/' + categoryId);
            return response.data.name;
        } catch (error) {
            console.error('Error fetching category: ', error.toString());
        }
        return [];
    }
}

export default new CategoryDAO();