import axios from "axios";
const baseUrl = "http://localhost:8083/api_category/";
export class NewService {
    getAll() {
        return axios.get(`${baseUrl}list_category`)
    }

    getCategoryById(id) {
        return axios.get(`${baseUrl}get_category/${id}`)
    }

    createCategory(category) {
        return axios.post(`${baseUrl}create_category`, category, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    updateCategory(id, category) {
        return axios.put(`${baseUrl}update_category/${id}`, category, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    deleteCategory(id){
        return axios.delete(`${baseUrl}delete_category/${id}`)
    }
}