import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
 


export default function Login(props) {
  const {title} = props;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCfm, setPasswordCfm] = useState('')
  const [name, setName] = useState('')
  const [UImsg, setUImsg] = useState('')

  useEffect(()=> {
    setUImsg('')
  }, [])

  const handleLog = async () => {
    console.log('login');
  }

  const handleReg = async () => {
    if(password === passwordCfm){
      try {
        let response = await axios.post('/register', {
          name, email, password
        }, {
          withCredentials:true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type' : 'application/json',
          }
        })
        console.log(response.data);
        setUImsg(response.data.msg)
      } catch (error) {
        console.error(error);
        setUImsg(error.response.data.msg)
      }
    } else {
      setUImsg('the passwords does not match')
    }
  }

  return (
    <>
      <Container maxWidth ='xs' sx={{pt:2}}>
        <h2>{title}</h2>
        <Box component="form" noValidate p={3} autoComplete='off'>
          <TextField id='email' label = 'Enter Email' fullWidth sx={{ input: { color: 'white' }}} onChange={(e)=>setEmail(e.target.value)}/>
          <TextField id='password' label = 'Enter Password' fullWidth sx={{mt:2, input: { color: 'white' }}} onChange={(e)=>setPassword(e.target.value)}/>
          
          {title === "Login" ? 
          <>
            <Button variant="text" onClick={()=>handleLog()}>Login</Button>
            <Box> <p>First Time?  <Link to='/register'>Sign up Here</Link></p> </Box>
          </>
          : 
          <>
            <TextField id='repassword' label = 'Confirm Password' fullWidth sx={{mt:2, input: { color: 'white' }}} onChange={(e)=>setPasswordCfm(e.target.value)}/>
            <TextField id='user_name' label = 'User Name' fullWidth sx={{mt:2, input: { color: 'white' }}} onChange={(e)=>setName(e.target.value)}/>
            <Button variant="text" onClick={()=>handleReg()}>Create User</Button>
            <Box> <p>Already Have Account <Link to='/login'>Login Here</Link></p> </Box>
          </>
         }
          <Box>
            <p className='ui-massage'>{UImsg}</p>
          </Box>
       </Box>
        
      </Container>
    </>

  )
}
