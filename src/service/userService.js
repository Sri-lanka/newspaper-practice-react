import axios from "axios";
const baseUrl = "http://localhost:8083/api_user/";
export class UserService {
    getAll() {
        return axios.get(`${baseUrl}list`)
    }

    getUserById(id) {
        return axios.get(`${baseUrl}get_user/${id}`)
    }

    createUser(user) {
        return axios.post(`${baseUrl}create_user`, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    updateUser(id, user) {
        return axios.put(`${baseUrl}update_user/${id}`, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    deleteUser(id){
        return axios.delete(`${baseUrl}delete_user/${id}`)
    }
}