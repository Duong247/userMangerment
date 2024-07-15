
// import axios from 'axios';
import instance from './customize-axios';
import axios from './customize-axios';

const fetchAllUser = (pageNumber)=>{
    return axios.get(`/api/users?page=${pageNumber}`)
}


export { fetchAllUser}