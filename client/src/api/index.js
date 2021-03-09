import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = (data) => axios.get(`${url}/profile/${data}`);
export const createPost = (email , newPost) =>{
    console.log("data in api" , newPost); 
    return axios.post(`${url}/profile/${email}`, newPost)};
export const likePost = (email , id) => axios.patch(`${url}/${email}/profile/${id}/likePost`);
export const updatePost = (email , id, updatedPost) => axios.patch(`${url}/profile/${email}/${id}`, updatedPost);
export const deletePost = (email , id) => axios.delete(`${url}/profile/${email}/${id}`);
export const login = (data)=>{return axios.post(url)}
export const signup = (data)=>{return axios.post(`${url}/signup` , data)}