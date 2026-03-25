import axios from 'axios'

const API_URL = "http://localhost:3000/users";

export const getUsers = async ()=>{
    const res = await axios.get(API_URL);
    return res.data; 
}

export const addUsers = async(user) =>{
    return axios.post(API_URL, user)
}

export const updateUsers = async(id, user) =>{
    return axios.put(`${API_URL}/${id}`, user)
}

export const deleteUsers = async(id) =>{
    return axios.delete(`${API_URL}/${id}`)
}