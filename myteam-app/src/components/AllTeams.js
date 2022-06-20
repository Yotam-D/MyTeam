import { useEffect,useState, useContext } from 'react'
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { Box } from '@mui/system';


export default function AllTeams() {
  const [userID,setUserID] = useState('')
  const [email,setEmail] = useState('')
  const [team,setTeam] = useState('')
  const [exp, setExp] = useState('');
  const navigate = useNavigate();
  const {accessToken} = useContext(AppContext);

  useEffect(()=>{
    const decode = jwt_decode(accessToken.accessToken);
    setUserID(decode.userId);
    setEmail(decode.email);
    setTeam(decode.team);
    const expire = decode.exp;
    console.log(expire*1000)
    setExp(new Date(expire*1000).toString());
    if(expire * 1000 < new Date().getTime()){
      navigate('/login')
    }
  })

  return (
    <div>
      <Box sx={{pt:2}}>
        <h1>Select Team</h1>
      </Box>
      
    </div>
  )
}


