import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';
import LoginPage from '../models/loginSchema.js'
const router = express.Router();

export const getPosts = async (req, res) => {
    try {

        const {email} = req.body;
        const postMessages = await PostMessage.find({email:email});

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    // console.log("saving" , req.body)
    const { title, message, selectedFile, creator, tags } = req.body;
    const {email} = req.body;
    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags  , email})

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id , email } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id , email };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

    res.json(updatedPost);
}

export const Login = async (req, res) => {
    const { email} = req.params;
    const postMessages = await PostMessage.find({email : email});

    res.status(200).json(postMessages);

}

export const SignUp = async(req, res) =>{
    const {email , password , Name , Phone_Number} = req.body;
     const User = new LoginPage( {email , password , Name , Phone_Number} );
    try {
        await User.save();
         
        res.status(201).json( {email , password , Name , Phone_Number});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}
export default router;