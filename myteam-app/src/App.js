import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import PageNavbar from './components/PageNavbar';
import Login from './components/Login';
import AllTeams from './components/AllTeams';
import Dashboard from './components/Dashboard';
import {useState, createContext} from 'react';

export const AppContext = createContext(null)



function App() {
  const [accessToken, setAccessToken] = useState('')
  const [currTeam, setCurrTeam] = useState('')

  return (
    //setting Token and Team in the AppContext
    <AppContext.Provider value = {{accessToken,setAccessToken,currTeam,setCurrTeam}}>
      <div className="App">
        <BrowserRouter>
          <PageNavbar />
          <div className='main-cointainer'>

              <Routes>
                <Route exact path = "/login" element = {<Login title='Login' />}></Route>
                <Route exact path = "/register" element = {<Login title='Sign up' />}></Route>
                <Route exact path = "/teams" element = {<AllTeams/>}></Route>
                <Route exact path = "/dashboard" element = {<Dashboard/>}></Route>
              </Routes>

          </div>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
