import UsersModel from "../models/UsersModels.js";


export const getUsers = (req,res) => {
    res.json({mgs:'users'})
}
export const login = (req,res) => {
    res.json({mgs:'login'})
}
export const logout = (req,res) => {
    res.json({mgs:'logout'})
}
export const register = (req,res) => {
    res.json({mgs:'register'})
}