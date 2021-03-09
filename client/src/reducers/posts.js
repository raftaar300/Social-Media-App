import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export const  posts =  (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export   const Login = (loginData = {email : "" , password : "" , active : false} , action)=>{
  switch (action.type) {
    case "LOGIN":
        return  action.payload;
    default:
       return loginData;
    
  }
}

export   const SignUp = (SignUpData = {email : "" , password : "" , Name : "" , Phone_Number : ""} , action)=>{
  switch (action.type) {
    case "SIGNUP":
        return  action.payload;
    default:
       return SignUpData
    
  }
}