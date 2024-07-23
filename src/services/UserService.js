
// import axios from 'axios';
import instance from './customize-axios';
import axios from './customize-axios';

const fetchAllUser = (pageNumber)=>{
    return axios.get(`/api/users?page=${pageNumber}`)
}

const postCreateUser = (name,job)=>{
    return axios.post("/api/user",{name,job})
}

const putUpdateUser = (name,job)=>{
    return axios.put("/api/user/2",{name,job})
}

export { fetchAllUser, postCreateUser, putUpdateUser}