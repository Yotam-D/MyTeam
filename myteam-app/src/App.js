import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import PageNavbar from './components/PageNavbar';
import Login from './components/Login';
import AllTeams from './components/Session/AllTeams';
import Dashboard from './components/Session/Dashboard';
import {useState, createContext} from 'react';
import UserSession from './components/Session/UserSession';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
//use context sa
export const AppContext = createContext(null)

function App() {
  const [accessToken, setAccessToken] = useState('')
  const [isLogged, setIsLogged] = useState(false)

  return (
        //setting Token and Team in the AppContext
    <AppContext.Provider value = {{accessToken, setAccessToken}}>
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <BrowserRouter>
            <PageNavbar LoggedStatus = {isLogged} setLogStatus = {setIsLogged} setToken = {setAccessToken}/>
            <div className='main-cointainer'>
                <Routes>
                  <Route exact path = "/" element = {<Login title='Login' setLogStatus = {setIsLogged}/>}></Route>
                  <Route exact path = "/login" element = {<Login title='Login' setLogStatus = {setIsLogged} />}></Route>
                  <Route exact path = "/register" element = {<Login title='Sign up' />}></Route>
                  <Route exact path = "/user" element = {<UserSession/>}></Route>
                  <Route exact path = "/teams" element = {<AllTeams/>}></Route>
                  <Route exact path = "/dashboard" element = {<Dashboard/>}></Route>
                </Routes>

            </div>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </AppContext.Provider>
  );
}

export default App;
