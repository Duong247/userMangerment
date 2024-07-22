
// import axios from 'axios';
import instance from './customize-axios';
import axios from './customize-axios';

const fetchAllUser = (pageNumber)=>{
    return axios.get(`/api/users?page=${pageNumber}`)
}

const postCreateUser = (name,job)=>{
    return axios.post("/api/user",{name,job})
}

export { fetchAllUser, postCreateUser}