import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import PageNavbar from './components/PageNavbar';
import Login from './components/Login';
import AllTeams from './components/AllTeams';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageNavbar />
        <div className='main-cointainer'>

            <Routes>
              <Route exact path = "/login" element = {<Login/>}></Route>
              <Route exact path = "/teams" element = {<AllTeams/>}></Route>
              <Route exact path = "/dashboard" element = {<Dashboard/>}></Route>
            </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
