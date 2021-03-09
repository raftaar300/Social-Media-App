import mongoose from 'mongoose';

const loginSchema = mongoose.Schema({
    email : String , 
    password : String , 
    Name : String, 
    Phone_Number : Number
})

const LoginPage = mongoose.model('LoginPage', loginSchema);

export default  LoginPage;