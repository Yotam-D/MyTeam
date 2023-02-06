import express from 'express';
import {getUsers, login, logout, register} from '../controllers/Users.js'

const router = express.Router()

router.get('/users' , getUsers)
router.post('/register' , register)
router.post('/login' , login)
router.get('/logout' , logout)

export default router; 