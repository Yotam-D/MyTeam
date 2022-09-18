import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/Database.js';
import router from './routes/Users.js';
import path from 'path';
import * as url from 'url';


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();
dotenv.config();

try {
    await db.authenticate();
    console.log('database connected')
} catch (error) {
    console.error('Error', error)
}



app.use(express.json())
app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(router)
app.use(express.static(path.join(__dirname + "/public")))

//openning port for listenning from according to the .env file (default 5000 if not working)
const activePort = process.env.PORT ? process.env.PORT : 5000;
app.listen(activePort, () => {
    console.log('hello here from port ' + activePort);
})


