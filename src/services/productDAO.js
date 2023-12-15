import api from "@/services/axiosInstance";

class ProductDAO {
    async getAllProducts() {
        console.log('DAO::Get all products method');
        try {
            const response = await api.get('/Products');
            return response.data;
        } catch (error) {
            console.error('Error fetching players: ', error.toString());
        }
        return [];
    }

}

export default new ProductDAO();