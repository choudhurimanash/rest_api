import axios from 'axios';

const URL ='http://localhost:8000';

export const addUser = async (data) =>{
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log('Error while calling addUser Api', error);
    }
}

export const getUser = async () =>{
    try {
        return await axios.get(`${URL}/all`)
    } catch (error) {
        console.log('Error while calling getUser api', error);
    }
}

export const editUser = async (id) =>{
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log('Error while calling editUser api', error);
    }
}

export const updateUser = async (id, data) => {
    try {
        return await axios.put(`${URL}/${id}`, data);
    } catch (error) {
        console.log('Error while calling updateUser Api', error);
    }
}

export const deleteUser = async (id) =>{
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log('Error while calling the deleteUser Api', error);
    }
}