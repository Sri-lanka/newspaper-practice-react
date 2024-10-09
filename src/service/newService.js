import axios from "axios";
const baseUrl = "http://localhost:8083/api_new/";

export class NewService {
    getAll() {
        return axios.get(`${baseUrl}list_news`)
    }
    getRecentNews(page_number, page_size ) {
        return axios.get(`${baseUrl}recent_new`, {
            params: {
                page_number: page_number,
                page_size: page_size,
            },
        })
    }

    getNewsByUser( page_number, page_size, id  ) {
        return axios.get(`${baseUrl}list_news/${id}`, {
            params: {
                offset: page_number,
                limit: page_size,
            },
        })
    }

    getNewsByCategory( page_number, page_size, id_category){
        return axios.get(`${baseUrl}category_new/${id_category}`, {
            params: {
                offset: page_number,
                limit: page_size,
            },
        })
    }
    
    getNewById(id) {
        return axios.get(`${baseUrl}get_new/${id}`)
    }

    createNew(news) {
        return axios.post(`${baseUrl}create_new`, news, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    updateNew(id, news) {
        return axios.put(`${baseUrl}update_new/${id}`, news, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    deleteNew(id) {
        return axios.delete(`${baseUrl}delete_new/${id}`)
    }
}