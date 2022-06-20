import dotenv from 'dotenv';
dotenv.config();

const getTeams = (req,res) => {
    res.json({mgs:'teams'})
}