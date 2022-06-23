import bcrypt from 'bcrypt';
import UsersModel from "../models/UsersModels.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export const getUsers = async (req,res) => {
    try{
        const users = await UsersModel.findAll({
            attributes:['id', 'name', 'email', 'password']
        })
        console.log(users)
        res.json({users})
    } catch (error) {
        console.error(error)
        res.status(404).json({mgs:'couldnt get users'})
    }
}

export const login = async (req,res) => {
    try {
        const user = await UsersModel.findAll({
            where: {
                email: req.body.email
            }
        })
        const match = await bcrypt.compare(req.body.password,user[0].password)
        if(!match) return res.status(404).json({msg:'Password is incorrect!'})
        const userID = user[0].id;
        const email = user[0].email;
        const name = user[0].name;
        const accessToken = jwt.sign({userID,email,name}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '300s'
        })
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            maxAge: 60 * 1000,
        })
        res.json({accessToken})
    } catch (error) {
        res.status(404).json({msg:'email was not found!'})
    }
}
export const logout = (req,res) => {
    res.json({mgs:'logout'})
}
export const register = async (req,res) => {
    const {name,email,password} = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password,salt);
    try {
        await UsersModel.create({
            name:name,
            email:email,
            password:hashPassword,
        })
        res.json({msg:"Sign Up succeeded!"})
    } catch (error) {
        res.status(403).json({msg:'this email is already assigned to a user'})
    }
}
